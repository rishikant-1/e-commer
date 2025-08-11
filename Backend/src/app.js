import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './routes/user.routes.js'

const app = express()
app.use(cors(
  {
    origin: 'http://localhost:8000',
    credentials: true
  }
))
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(express.json({limit: '16kb'}))

app.use("/api/user", router)

app.use((err, req, res, next) => {
  const statusCode = typeof err.statusCode === 'number' ? err.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Something went wrong',
    errors: err.errors || [],
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});
export default app