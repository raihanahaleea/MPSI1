import React from 'react'

function ExpensesPage() {
  const handleAddExpense = () => {
    window.alert('Tambah pengeluaran baru (fitur belum tersambung ke database).')
  }

  const handleSearch = (event) => {
    const value = event.target.value
    console.log('Cari pengeluaran:', value)
  }

  const handleFilterCategory = (event) => {
    const value = event.target.value
    console.log('Filter kategori pengeluaran:', value)
  }

  const handleEditExpense = (description) => {
    window.alert(`Edit pengeluaran: ${description} (fitur belum tersambung ke database).`)
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Expenses Management
        </h1>
        <button
          className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
          onClick={handleAddExpense}
        >
          <span className="material-symbols-outlined">add</span>
          Add Expense
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-container-light dark:bg-container-dark shadow">
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Today's Expense</p>
          <h2 className="text-xl font-bold mt-1">Rp 350.000</h2>
        </div>
        <div className="p-4 rounded-xl bg-container-light dark:bg-container-dark shadow">
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">This Week</p>
          <h2 className="text-xl font-bold mt-1">Rp 2.100.000</h2>
        </div>
        <div className="p-4 rounded-xl bg-container-light dark:bg-container-dark shadow">
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">This Month</p>
          <h2 className="text-xl font-bold mt-1">Rp 6.850.000</h2>
        </div>
      </div>

      <div className="bg-container-light dark:bg-container-dark p-6 rounded-xl shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Expense List</h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-3 py-2 w-48"
              onChange={handleSearch}
            />
            <select className="border rounded-lg px-3 py-2" onChange={handleFilterCategory}>
              <option value="all">All</option>
              <option value="supplier">Supplier</option>
              <option value="operational">Operational</option>
              <option value="logistics">Logistics</option>
            </select>
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border-light dark:border-border-dark text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <th className="py-3">Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-border-light dark:border-border-dark">
              <td className="py-3">01 Dec 2025</td>
              <td>Flower Supplier Payment</td>
              <td>Supplier</td>
              <td>Rp 450.000</td>
              <td className="text-center">
                <button className="text-primary" onClick={() => handleEditExpense('Flower Supplier Payment')}>
                  Edit
                </button>
              </td>
            </tr>
            <tr className="border-b border-border-light dark:border-border-dark">
              <td className="py-3">30 Nov 2025</td>
              <td>Courier Fee</td>
              <td>Logistics</td>
              <td>Rp 120.000</td>
              <td className="text-center">
                <button className="text-primary">Edit</button>
              </td>
            </tr>
            <tr>
              <td className="py-3">29 Nov 2025</td>
              <td>Electricity Bill</td>
              <td>Operational</td>
              <td>Rp 280.000</td>
              <td className="text-center">
                <button className="text-primary">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ExpensesPage
