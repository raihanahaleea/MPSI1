import React from 'react'

function StockPage() {
  const handleAddStock = () => {
    window.alert('Tambah stok baru (fitur belum tersambung ke database).')
  }

  const handleEditStock = (productName) => {
    window.alert(`Edit stok: ${productName} (fitur belum tersambung ke database).`)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-pink-700">Stock Management</h2>
        <button
          className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg"
          onClick={handleAddStock}
        >
          + Add Stock
        </button>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-pink-100 text-left text-gray-700">
              <th className="p-3">Product</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-medium">Pink Daisy Bouquet</td>
              <td className="p-3 text-gray-600">Artificial Flower</td>
              <td className="p-3">15</td>
              <td className="p-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Ready
                </span>
              </td>
              <td className="p-3">
                <button
                  className="px-3 py-1 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600"
                  onClick={() => handleEditStock('Pink Daisy Bouquet')}
                >
                  Edit
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-3 font-medium">Pastel Rose</td>
              <td className="p-3 text-gray-600">Pipe Cleaner Flower</td>
              <td className="p-3">5</td>
              <td className="p-3">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                  Low Stock
                </span>
              </td>
              <td className="p-3">
                <button className="px-3 py-1 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600">
                  Edit
                </button>
              </td>
            </tr>

            <tr>
              <td className="p-3 font-medium">Spring Mix Bouquet</td>
              <td className="p-3 text-gray-600">Artificial Flower</td>
              <td className="p-3">0</td>
              <td className="p-3">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  Out of Stock
                </span>
              </td>
              <td className="p-3">
                <button className="px-3 py-1 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StockPage
