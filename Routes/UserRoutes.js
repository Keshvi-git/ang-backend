const express=require('express')
const Customer =require('../Models/Customer')
const router = express.Router()
var jwt = require('jsonwebtoken')
const { GetAllUsers, GetByID, AddUser, UpdateUser, DelUser } = require('../Controller/userConroller')

router.get('/', GetAllUsers)
router.get('/:id', GetByID)
router.post('/', AddUser)
router.patch('/:id', UpdateUser)
router.delete('/:id', DelUser)

router.post('/login',async(req,res)=>{
    const data= await Customer.findOne({
        name:req.body.name,
        password:req.body.password
    })

    if(data){
        var token =jwt.sign({...data},process.env.jwtSecret)
        const ans={
            isvalid: true,
            msg:"welcome to our website",
            token:token
            // data:data
        }
        res.send(ans)
    }
    else{
        const data={
            isvalid:false,
            msg:"UserName / Password is incorrect"
        }
        res.send(data)
    }
})

module.exports = router