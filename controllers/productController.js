import productModel from "../models/productModel.js";

export const saveProductController = async (req, res) => {
  try {
    const { name, phone, address, products, sNo, stateCode, cgst, igst, sgst } =
      req.body;
    if (
      !name ||
      !phone ||
      !address ||
      !products ||
      !sNo ||
      !stateCode ||
      !cgst ||
      !igst ||
      !sgst
    ) {
      return res.status(404).json({
        message: "Plaase provide customer and product detail",
      });
    }

    // const isExist = await productModel.findOne({ phone });
    // if (isExist) {
    //   isExist.products = products;
    //   await isExist.save();

    //   return res.status(200).send({
    //     success: true,
    //     message: "product saved successfully!",
    //   });
    // }

    const newProduct = new productModel(req.body);
    await newProduct.save();

    return res.status(200).send({
      success: true,
      message: "product saved successfully!",
    });
  } catch (error) {
    res.status(404).send({
      sussess: false,
      message: "Error while save product",
    });
  }
};

//search product
export const getProducts = async (req, res) => {
  try {
    const { phone } = req.body;
    const products = await productModel.find({ phone });
    return res.status(200).json(products);
  } catch (error) {
    res.status(404).send({
      sussess: false,
      message: "Error while get product",
    });
  }
};

export const getAllProductsLength = async (req, res) => {
  try {
    const products = await productModel.find({});
    const length = products.length;
    return res.status(200).json(length);
  } catch (error) {
    res.status(404).send({
      sussess: false,
      message: "Error while get total bill",
    });
  }
};

//get all bills
export const getAllBills = async (req, res) => {
  try {
    const bills = await productModel.find({});
    return res.status(200).json(bills);
  } catch (error) {
    res.status(404).send({
      sussess: false,
      message: "Error while get bills",
    });
  }
};

//get bill by id
export const getBillById = async (req, res) => {
  try {
    const { bid } = req.body;
    const product = await productModel.find({ _id: bid });
    return res.status(200).json(product);
  } catch (error) {
    res.status(404).send({
      sussess: false,
      message: "Error while get product",
    });
  }
};
