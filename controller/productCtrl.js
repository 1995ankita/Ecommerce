const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const slugify = require('slugify');

const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
        });
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const deleteProduct = await Product.findOneAndDelete(id);
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error);
    }
});


const getaproduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const findproduct = await Product.findById(id);
        res.json(findproduct);
    } catch (error) {
        throw new Error(error);
    }
});

const getallproduct = asyncHandler(async (req, res) => {
    try {
        const getallProducts = await Product.find();
        res.json(getallProducts);
    } catch (error) {
        throw new Error(error);
    }
});
module.exports = { createProduct, getaproduct, getallproduct, updateProduct,deleteProduct };