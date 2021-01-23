import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routers/productRouter.js'
import userRouter from './routers/userRouter.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://localhost/amazona',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => console.log('Connected to the DB')
)

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.get('/', (req, res) => res.send('server is ready'))

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`)
})
