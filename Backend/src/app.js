import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import { cartRout } from './routes/cart.routes.js'

const app = express()
app.use(cors(
  {
    origin: [
      'https://anon-commerse.vercel.app',
      'http://localhost:5173'
    ],
    credentials: true,
  }
))
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(express.json({limit: '16kb'}))

app.use("/api/user", userRouter);
app.use('/api/seller', productRouter);
app.use("/api/cart", cartRout)

app.use((err, req, res, next) => {
  const statusCode = typeof err.statusCode === 'number' ? err.statusCode : 500;
  
  res.status(statusCode).json({
    success: false,
    message: err.message || err || 'Something went wrong',
    errors: err.errors || [],
  });
});


export default app