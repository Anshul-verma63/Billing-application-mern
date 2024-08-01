import adminModel from "../models/adminModel.js";
import bcrypt from "bcrypt";

//login
export const adminLoginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).send({
      success: false,
      message: "Provide all fields",
    });
  }
  const admin = await adminModel.findOne({ email });
  if (!admin) {
    return res.status(200).send({
      success: false,
      message: "Wrong email or password!",
    });
  }
  //match password
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(200).send({
      success: false,
      message: "Wrong email or password!",
    });
  }
  admin.password = "";
  return res.status(200).send({
    success: true,
    message: "login successfully",
    admin,
  });
};

//register
export const adminRegisterController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Provide all fields",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new adminModel({ email: email, password: hashedPassword });
    await admin.save();
    return res.status(200).send({
      success: true,
      message: "Admin register success",
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error while register user",
    });
  }
};
