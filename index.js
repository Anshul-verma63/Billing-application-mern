import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import dbConnection from "./db/dbConnect.js";
import router from "./routes/productRoute.js";
import adminRoute from "./routes/adminRoute.js";

//create an instance
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send({
    message: "i am server",
  });
});
app.use("/api/v1/product", router);
app.use("/api/v1/admin", adminRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

//db connection
dbConnection();
