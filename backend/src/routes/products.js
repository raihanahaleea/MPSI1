import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { pool } from '../db.js'

const router = Router()

const uploadsDir = path.join(process.cwd(), 'backend', 'uploads')
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir)
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const ext = path.extname(file.originalname) || '.jpg'
    cb(null, `product-${uniqueSuffix}${ext}`)
  },
})

const upload = multer({ storage })

router.post('/upload-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' })
  }

  const relativePath = `/uploads/${req.file.filename}`
  res.status(201).json({ imageUrl: relativePath })
})

// GET /api/products - list products
router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, description, category, price, image_url AS imageUrl, status, stock FROM products ORDER BY created_at DESC',
    )
    res.json(rows)
  } catch (err) {
    console.error('Error fetching products', err)
    res.status(500).json({ message: 'Failed to fetch products' })
  }
})

// POST /api/products - create product
router.post('/', async (req, res) => {
  try {
    const { name, description = null, category = null, price = 0, imageUrl = null, status = 'active', stock = 0 } = req.body

    if (!name) {
      return res.status(400).json({ message: 'Name is required' })
    }

    const [result] = await pool.query(
      'INSERT INTO products (name, description, category, price, image_url, status, stock) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, description, category, price, imageUrl, status, stock],
    )

    const [rows] = await pool.query(
      'SELECT id, name, description, category, price, image_url AS imageUrl, status, stock FROM products WHERE id = ?',
      [result.insertId],
    )

    res.status(201).json(rows[0])
  } catch (err) {
    console.error('Error creating product', err)
    res.status(500).json({ message: 'Failed to create product' })
  }
})

// PATCH /api/products/:id - update product
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { name, description, category, price, imageUrl, status, stock } = req.body

  try {
    const fields = []
    const values = []

    if (name !== undefined) {
      fields.push('name = ?')
      values.push(name)
    }
    if (description !== undefined) {
      fields.push('description = ?')
      values.push(description)
    }
    if (category !== undefined) {
      fields.push('category = ?')
      values.push(category)
    }
    if (price !== undefined) {
      fields.push('price = ?')
      values.push(price)
    }
    if (imageUrl !== undefined) {
      fields.push('image_url = ?')
      values.push(imageUrl)
    }
    if (status !== undefined) {
      fields.push('status = ?')
      values.push(status)
    }
    if (stock !== undefined) {
      fields.push('stock = ?')
      values.push(stock)
    }

    if (fields.length === 0) {
      return res.status(400).json({ message: 'No fields to update' })
    }

    values.push(id)
    const sql = `UPDATE products SET ${fields.join(', ')} WHERE id = ?`
    const [result] = await pool.query(sql, values)

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' })
    }

    const [rows] = await pool.query(
      'SELECT id, name, description, category, price, image_url AS imageUrl, status, stock FROM products WHERE id = ?',
      [id],
    )

    res.json(rows[0])
  } catch (err) {
    console.error('Error updating product', err)
    res.status(500).json({ message: 'Failed to update product' })
  }
})

export default router
