import React, { useEffect, useState } from 'react'

function OrdersPage() {
  const [filterStatus, setFilterStatus] = useState('all')
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch('/api/orders')
        if (!response.ok) {
          throw new Error('Gagal mengambil data orders dari server')
        }

        const data = await response.json()

        const mapped = Array.isArray(data)
          ? data.map((order) => {
              const rawTotal =
                typeof order.total_amount === 'number'
                  ? order.total_amount
                  : Number(order.total_amount ?? 0)

              return {
                id: order.id,
                customer: order.customer_name ?? order.customer ?? 'Unknown',
                product: order.product_name ?? order.product ?? '-',
                status: order.status ?? 'pending',
                total:
                  rawTotal && !Number.isNaN(rawTotal)
                    ? rawTotal.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        maximumFractionDigits: 0,
                      })
                    : order.total ?? 'Rp 0',
              }
            })
          : []

        setOrders(mapped)
      } catch (err) {
        console.error(err)
        setError(err.message || 'Terjadi kesalahan saat memuat orders')
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  const handleFilterClick = (status) => {
    setFilterStatus(status)
  }

  const handleMarkCompleted = async (id) => {
    try {
      const target = orders.find((o) => o.id === id)
      if (!target || target.status !== 'pending') return

      setOrders((prev) =>
        prev.map((order) =>
          order.id === id && order.status === 'pending'
            ? { ...order, status: 'completed' }
            : order,
        ),
      )

      const response = await fetch(`/api/orders/${id}/complete`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Gagal mengupdate status order di server')
      }
    } catch (err) {
      console.error(err)
      setError(err.message || 'Terjadi kesalahan saat mengupdate order')
      setOrders((prev) =>
        prev.map((order) =>
          order.id === id && order.status === 'completed'
            ? { ...order, status: 'pending' }
            : order,
        ),
      )
    }
  }

  const totalOrders = orders.length
  const completedCount = orders.filter((o) => o.status === 'completed').length
  const pendingCount = orders.filter((o) => o.status === 'pending').length
  const cancelledCount = orders.filter((o) => o.status === 'cancelled').length

  const filteredOrders = orders.filter((order) => {
    if (filterStatus === 'all') return true
    return order.status === filterStatus
  })

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,3fr] gap-6 items-stretch">
        <div className="relative overflow-hidden rounded-2xl shadow bg-gradient-to-br from-pink-400 to-pink-600 text-white p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-1">Orders Overview</h1>
            <p className="text-sm text-pink-50">
              Pantau pesanan masuk, status, dan pendapatan langsung dari satu tempat.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4 text-sm">
            <div>
              <p className="text-pink-100 text-xs">Hari ini</p>
              <p className="font-semibold text-lg">24 orders</p>
            </div>
            <div className="h-10 w-px bg-pink-300/60" />
            <div>
              <p className="text-pink-100 text-xs">Bulan ini</p>
              <p className="font-semibold text-lg">Rp 12.430.000</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 bg-white rounded-xl shadow flex flex-col justify-between">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Total Orders</p>
            <h2 className="text-2xl font-bold mt-1">{totalOrders}</h2>
          </div>
          <div className="p-4 bg-white rounded-xl shadow flex flex-col justify-between">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Completed</p>
            <h2 className="text-2xl font-bold mt-1 text-green-600">{completedCount}</h2>
          </div>
          <div className="p-4 bg-white rounded-xl shadow flex flex-col justify-between">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Pending</p>
            <h2 className="text-2xl font-bold mt-1 text-yellow-500">{pendingCount}</h2>
          </div>
          <div className="p-4 bg-white rounded-xl shadow flex flex-col justify-between">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Cancelled</p>
            <h2 className="text-2xl font-bold mt-1 text-red-500">{cancelledCount}</h2>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        {loading && (
          <div className="text-xs md:text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            Memuat data orders dari server...
          </div>
        )}

        {error && (
          <div className="text-xs md:text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        {pendingCount > 0 && (
          <div className="flex items-start justify-between gap-3 text-xs md:text-sm text-gray-700 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
            <p>
              Saat ini terdapat{' '}
              <span className="font-semibold">{pendingCount} pending orders</span>. Cek daftar di bawah dan tandai
              pesanan yang sudah selesai supaya statusnya tidak pending terus.
            </p>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold">Latest Orders</h3>
            <p className="text-xs text-gray-500">2 pesanan terbaru ditampilkan di sini.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => handleFilterClick('all')}
              className={`px-3 py-1 rounded-full border  ${
                filterStatus === 'all'
                  ? 'border-pink-primary/40 text-pink-primary bg-pink-primary/5'
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => handleFilterClick('completed')}
              className={`px-3 py-1 rounded-full border  ${
                filterStatus === 'completed'
                  ? 'border-pink-primary/40 text-pink-primary bg-pink-primary/5'
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Completed
            </button>
            <button
              type="button"
              onClick={() => handleFilterClick('pending')}
              className={`px-3 py-1 rounded-full border  ${
                filterStatus === 'pending'
                  ? 'border-pink-primary/40 text-pink-primary bg-pink-primary/5'
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Pending
            </button>
            <button
              type="button"
              onClick={() => handleFilterClick('cancelled')}
              className={`px-3 py-1 rounded-full border  ${
                filterStatus === 'cancelled'
                  ? 'border-pink-primary/40 text-pink-primary bg-pink-primary/5'
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Cancelled
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b bg-gray-50 text-gray-600">
                <th className="py-2 px-3">Customer</th>
                <th className="px-3">Product</th>
                <th className="px-3">Status</th>
                <th className="px-3">Total</th>
                <th className="px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => {
                const isCompleted = order.status === 'completed'
                const isPending = order.status === 'pending'
                const statusClass = isCompleted
                  ? 'bg-green-50 text-green-600'
                  : isPending
                    ? 'bg-yellow-50 text-yellow-600'
                    : 'bg-gray-100 text-gray-600'

                return (
                  <tr key={order.id} className="border-b last:border-0">
                    <td className="py-3 px-3">{order.customer}</td>
                    <td className="px-3">{order.product}</td>
                    <td className="px-3">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusClass}`}
                      >
                        {order.status === 'cancelled'
                          ? 'Cancelled'
                          : order.status === 'pending'
                            ? 'Pending'
                            : 'Completed'}
                      </span>
                    </td>
                    <td className="px-3 font-medium">{order.total}</td>
                    <td className="px-3 text-right">
                      {isPending && (
                        <button
                          type="button"
                          onClick={() => handleMarkCompleted(order.id)}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          Mark as completed
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
