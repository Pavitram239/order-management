const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const orderRoutes = require("./routes/order");
// create express server
const app = express();

app.use(express.json());

app.use("/api/v1/orders", orderRoutes);

const PORT = process.env.PORT || 3100;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
