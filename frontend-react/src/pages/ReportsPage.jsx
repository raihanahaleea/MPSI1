import React from 'react'

function ReportsPage({ summary, loading, error }) {
  const revenue = summary?.revenue || 0
  const totalOrders = summary?.totalOrders || 0

  const revenueDisplay = revenue
    ? revenue.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })
    : 'Rp 0'

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
        Reports
      </h1>

      {loading && (
        <div className="mb-4 text-xs md:text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
          Memuat ringkasan laporan dari server...
        </div>
      )}

      {error && (
        <div className="mb-4 text-xs md:text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-5 bg-container-light dark:bg-container-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm">
          <p className="text-sm text-text-secondary-light">Total Revenue</p>
          <h2 className="text-2xl font-bold mt-2">{revenueDisplay}</h2>
        </div>
        <div className="p-5 bg-container-light dark:bg-container-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm">
          <p className="text-sm text-text-secondary-light">Total Orders</p>
          <h2 className="text-2xl font-bold mt-2">{totalOrders}</h2>
        </div>
        <div className="p-5 bg-container-light dark:bg-container-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm">
          <p className="text-sm text-text-secondary-light">Total Expenses</p>
          <h2 className="text-2xl font-bold mt-2">Rp 3.740.000</h2>
        </div>
      </div>

      <div className="bg-container-light dark:bg-container-dark border border-border-light dark:border-border-dark rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Transaction Summary</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border-light dark:border-border-dark text-text-secondary-light">
              <th className="py-3">Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="text-text-primary-light dark:text-text-primary-dark">
            <tr className="border-b border-border-light dark:border-border-dark">
              <td className="py-3">2025-01-14</td>
              <td>Order</td>
              <td>Bouquet Premium A</td>
              <td className="font-semibold text-green-600">+ Rp 250.000</td>
            </tr>
            <tr className="border-b border-border-light dark:border-border-dark">
              <td className="py-3">2025-01-13</td>
              <td>Expense</td>
              <td>Purchase Roses</td>
              <td className="font-semibold text-red-600">- Rp 750.000</td>
            </tr>
            <tr>
              <td className="py-3">2025-01-12</td>
              <td>Order</td>
              <td>Graduation Bouquet</td>
              <td className="font-semibold text-green-600">+ Rp 350.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReportsPage
