const express=require('express')
const Order =require('../Models/Order')
const { GetAllOrder, IdOrder, AddOrder, UpdateOrder, DelOrder } = require('../Controller/orderController')
const router = express.Router()

router.get('/',GetAllOrder)
router.get('/:id',IdOrder)
router.post('/',AddOrder)
router.patch('/:id',UpdateOrder)
router.delete('/:id', DelOrder)

module.exports = router