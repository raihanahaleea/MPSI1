import React from 'react'

function ReportsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
        Reports
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-5 bg-container-light dark:bg-container-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm">
          <p className="text-sm text-text-secondary-light">Total Revenue</p>
          <h2 className="text-2xl font-bold mt-2">Rp 12.450.000</h2>
        </div>
        <div className="p-5 bg-container-light dark:bg-container-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm">
          <p className="text-sm text-text-secondary-light">Total Orders</p>
          <h2 className="text-2xl font-bold mt-2">124</h2>
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
