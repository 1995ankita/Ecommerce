const express = require("express");
const { createProduct, getaproduct, getallproduct, updateProduct, deleteProduct } = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post("/", authMiddleware, createProduct);
router.get("/:id", getaproduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/", getallproduct);

module.exports = router;