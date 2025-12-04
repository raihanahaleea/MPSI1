import React, { useState } from 'react'

function OrdersPage() {
  const [filterStatus, setFilterStatus] = useState('all')

  const handleFilterClick = (status) => {
    setFilterStatus(status)
  }

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
            <h2 className="text-2xl font-bold mt-1">128</h2>
          </div>
          <div className="p-4 bg-white rounded-xl shadow flex flex-col justify-between">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Completed</p>
            <h2 className="text-2xl font-bold mt-1 text-green-600">102</h2>
          </div>
          <div className="p-4 bg-white rounded-xl shadow flex flex-col justify-between">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Pending</p>
            <h2 className="text-2xl font-bold mt-1 text-yellow-500">6</h2>
          </div>
          <div className="p-4 bg-white rounded-xl shadow flex flex-col justify-between">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Cancelled</p>
            <h2 className="text-2xl font-bold mt-1 text-red-500">2</h2>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
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
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-0">
                <td className="py-3 px-3">Ayu</td>
                <td className="px-3">Pink Daisy Bouquet</td>
                <td className="px-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                    Completed
                  </span>
                </td>
                <td className="px-3 font-medium">Rp 120.000</td>
              </tr>
              <tr className="border-b last:border-0">
                <td className="py-3 px-3">Dela</td>
                <td className="px-3">Rose Pastel</td>
                <td className="px-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-50 text-yellow-600 text-xs font-medium">
                    Pending
                  </span>
                </td>
                <td className="px-3 font-medium">Rp 150.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
