const express=require('express')
const Category =require('../Models/Category')
const { GetAllCat, IdCat, AddCat, UpdateCat, DelCat } = require('../Controller/CategoryController')
const router = express.Router()

router .get('/', GetAllCat)
router.get('/:id', IdCat)
router.post('/', AddCat)
router.patch('/:id', UpdateCat)
router.delete('/:id', DelCat)

module.exports = router