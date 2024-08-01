import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  products: {
    type: [],
  },
  sNo: {
    type: String,
  },
  cgst: {
    type: String,
  },
  sgst: {
    type: String,
  },
  igst: {
    type: String,
  },
  stateCode: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date().toDateString(),
  },
});

export default mongoose.model("product", productSchema);
