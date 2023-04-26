const express = require('express')
const ApiRouter = require('./routes/productRoutes')
require('dotenv').config()

const app = express()
const port = process.env.PORT
const productRoutes = ApiRouter

app.use(express.json())
app.use('/api/v1', productRoutes)

app.listen(port, () => console.log(`Server running at ${port}`))
