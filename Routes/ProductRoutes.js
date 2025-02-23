const express=require('express')
const Product =require('../Models/Product')
const { GetAllPro, IdProduct, AddPro, UpdatePro, DelProduct, getproduct } = require('../Controller/productController')
const router = express.Router()

router .get('/', GetAllPro)
router.get('/:id', IdProduct)
router.post('/', AddPro)
router.patch('/:id', UpdatePro)
router.delete('/:id', DelProduct)
router.get("/category/:categoryId", getproduct)
module.exports = router
