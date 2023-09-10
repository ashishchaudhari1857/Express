const express = require("express");
const path = require("path");
const router = express.Router();

const admincontroller = require("../controller/product");
router.post("/product", admincontroller.proudct);

router.get("/form", admincontroller.form);
router.get("/contact", admincontroller.contact);
router.post("/success", admincontroller.success);
module.exports = router;
