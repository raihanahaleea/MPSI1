import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import ordersRouter from './routes/orders.js'
import productsRouter from './routes/products.js'

const app = express()
const PORT = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'stitch-dashboard-backend' })
})

app.use('/api/orders', ordersRouter)
app.use('/api/products', productsRouter)

app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err)
  res.status(500).json({ message: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`)
})
