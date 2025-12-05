import { Router } from 'express'
import { pool } from '../db.js'

const router = Router()

// GET /api/orders - list latest orders
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, customer_name, product_name, status, total_amount, created_at FROM orders ORDER BY created_at DESC LIMIT 100',
    )

    res.json(
      rows.map((row) => ({
        id: row.id,
        customer: row.customer_name,
        product: row.product_name,
        status: row.status,
        total: row.total_amount,
        createdAt: row.created_at,
      })),
    )
  } catch (err) {
    console.error('Error fetching orders', err)
    res.status(500).json({ message: 'Failed to fetch orders' })
  }
})

// PATCH /api/orders/:id/complete - mark order as completed
router.patch('/:id/complete', async (req, res) => {
  const { id } = req.params

  try {
    const [result] = await pool.query(
      'UPDATE orders SET status = ? WHERE id = ? AND status = ? LIMIT 1',
      ['completed', id, 'pending'],
    )

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Order not found or not pending' })
    }

    res.json({ message: 'Order marked as completed' })
  } catch (err) {
    console.error('Error updating order', err)
    res.status(500).json({ message: 'Failed to update order' })
  }
})

// GET /api/orders/summary - simple summary (counts + total revenue)
router.get('/summary', async (_req, res) => {
  try {
    const [[counts]] = await pool.query(
      `SELECT
         COUNT(*) AS totalOrders,
         SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completedOrders,
         SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END)   AS pendingOrders,
         SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelledOrders,
         COALESCE(SUM(CASE WHEN status = 'completed' THEN total_amount ELSE 0 END), 0) AS revenue
       FROM orders`,
    )

    res.json({
      totalOrders: Number(counts.totalOrders || 0),
      completedOrders: Number(counts.completedOrders || 0),
      pendingOrders: Number(counts.pendingOrders || 0),
      cancelledOrders: Number(counts.cancelledOrders || 0),
      revenue: Number(counts.revenue || 0),
    })
  } catch (err) {
    console.error('Error fetching orders summary', err)
    res.status(500).json({ message: 'Failed to fetch orders summary' })
  }
})

export default router
