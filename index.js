const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const UserRoutes = require('./Routes/UserRoutes')
const ProductRoutes = require('./Routes/ProductRoutes')
const OrderRoutes = require('./Routes/OrderRoutes')
const CartRoutes = require('./Routes/CartRoutes')
const CategoryRoutes = require('./Routes/CategoryRoutes')
const bodyParser = require('body-parser')
const cors = require('cors');

// console.log(process.env)

mongoose.connect(process.env.DBUrl)
	.then(() => {
		console.log('DB Connected')

		const app = express()
		app.use(cors());
		app.use(bodyParser.json())
		app.use('/users', UserRoutes);
		app.use('/product', ProductRoutes);
		app.use('/order', OrderRoutes);
		app.use('/cart', CartRoutes);
		app.use('/category',CategoryRoutes)


		app.listen(process.env.PORT, (req, res) => {
			console.log("Server Started")
		})
	})
	.catch((err) => {
		console.log(err)
	})



