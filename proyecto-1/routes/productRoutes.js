const express = require('express')
const {
  getAllProducts,
  addProduct,
  updateProductById,
  deleteProductById
} = require('../controllers/productController')

const ApiRouter = express.Router()

ApiRouter.get('/products', getAllProducts)

ApiRouter.post('/products', addProduct)

ApiRouter.patch('/products/:id', updateProductById)

ApiRouter.delete('/products/:id', deleteProductById)

module.exports = ApiRouter
