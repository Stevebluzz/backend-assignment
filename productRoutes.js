const express = require("express")
const products = require("../controllers/productctrl")

 const router = express.Router();



 router.get("/allproducts", products.getProducts);
 router.post("/product", products.postProducts);

 
 

 module.exports = router;