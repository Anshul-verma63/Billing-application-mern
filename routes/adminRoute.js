import express from "express";
import {
  adminLoginController,
  adminRegisterController,
} from "../controllers/adminController.js";
const router = express.Router();

//routes
router.post("/login", adminLoginController);
router.post("/register", adminRegisterController);

export default router;
