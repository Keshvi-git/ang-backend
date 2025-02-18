const express=require('express')
const Cart =require('../Models/Cart')
const { GetAll, GetID, Add, Update, Delete } = require('../Controller/cartController')
const router = express.Router()

router.get('/',GetAll)
router.get('/:id',GetID)
router.post('/',Add)
router.patch('/:id',Update)
router.delete('/:id', Delete)


module.exports = router