import express from 'express';
import dotenv from 'dotenv'
import path from 'path';
import cors from 'cors';
const app = express()
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') })
import { connectDB } from './config/connectDB';
import products from './Routes/Product'
import order from './Routes/Order'

connectDB()

app.use(express.json())
app.use(cors())
app.use('/api/v1/', products)
app.use('/api/v1/', order)
app.listen(process.env.PORT, () => {
    console.log(`Server Listening Port ${process.env.PORT}`);

})