const express = require("express");
const mongoose = require("mongoose");
//const Product = require("./models/product.model.js");
const routee = require("./product-routes/product.route.js");
const app = express();
const port = 3000;

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", routee);

app.get("/", (req, res) => {
  res.send("Hello Worldd");
});

/*app.listen(port, () => {
  console.log(`running on port ${port}`)});
*/
mongoose
  .connect(
    "mongodb://localhost:27017/auth"
  )
  .then(() => {
    console.log("Connected to MongoDB...");
    app.listen(port, () => {
      console.log(`running on port ${port}`);
    });
  });
