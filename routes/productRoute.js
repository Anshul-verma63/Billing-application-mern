import express from "express";
import {
  getAllBills,
  getAllProductsLength,
  getBillById,
  getProducts,
  saveProductController,
} from "../controllers/productController.js";

const router = express.Router();

//routes
router.post("/save-product", saveProductController);
router.post("/search", getProducts);
router.get("/get-length", getAllProductsLength);
router.get("/get-bills", getAllBills);
router.post("/get-bill", getBillById);

export default router;
