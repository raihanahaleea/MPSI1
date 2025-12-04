import React from 'react'

function ProductsPage() {
  const handleEdit = (productName) => {
    window.alert(`Edit produk: ${productName} (fitur belum tersambung ke database).`)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">Product</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-4">
          <img
            src="https://cheapflowers.ae/cdn/shop/files/gerbera.webp?v=1720186956"
            className="rounded-lg mb-3 w-full h-48 object-cover"
            alt="Pink Daisy Bouquet"
          />
          <h3 className="text-lg font-bold">Pink Daisy Bouquet</h3>
          <p className="text-gray-600 text-sm mt-1">Artificial Flower</p>
          <p className="text-pink-600 font-bold mt-2">Rp 120.000</p>
          <button
            className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg"
            onClick={() => handleEdit('Pink Daisy Bouquet')}
          >
            Edit
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <img
            src="https://blooming.com.my/wp-content/uploads/2022/07/HR3004-2.jpg"
            className="rounded-lg mb-3 w-full h-48 object-cover"
            alt="Pastel Rose"
          />
          <h3 className="text-lg font-bold">Pastel Rose</h3>
          <p className="text-gray-600 text-sm mt-1">Pipe Cleaner Flower</p>
          <p className="text-pink-600 font-bold mt-2">Rp 150.000</p>
          <button
            className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg"
            onClick={() => handleEdit('Pastel Rose')}
          >
            Edit
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <img
            src="https://assets.intleflorist.com/site/0081A/PIM_Images/Regular/STRHTU2-1.png"
            className="rounded-lg mb-3 w-full h-48 object-cover"
            alt="Spring Mix Bouquet"
          />
          <h3 className="text-lg font-bold">Spring Mix Bouquet</h3>
          <p className="text-gray-600 text-sm mt-1">Artificial Flower</p>
          <p className="text-pink-600 font-bold mt-2">Rp 135.000</p>
          <button
            className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg"
            onClick={() => handleEdit('Spring Mix Bouquet')}
          >
            Edit
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAZfj9Lxtj855h1MAUguQa539IWXna0PW1Q&s"
            className="rounded-lg mb-3 w-full h-48 object-cover"
            alt="Red Rose Flower"
          />
          <h3 className="text-lg font-bold">Red Rose Flower</h3>
          <p className="text-gray-600 text-sm mt-1">Red Rose</p>
          <p className="text-pink-600 font-bold mt-2">Rp 135.000</p>
          <button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg">
            Edit
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJQP0TxVv1UIqu1F7Cgcqni4hlZO4c0HZjLOg_iRE_ABhjwqPsKlf5fLIHCX4bSod2Bo&usqp=CAU"
            className="rounded-lg mb-3 w-full h-48 object-cover"
            alt="pink and white palette"
          />
          <h3 className="text-lg font-bold">pink and white palette</h3>
          <p className="text-gray-600 text-sm mt-1">Artificial Flower</p>
          <p className="text-pink-600 font-bold mt-2">Rp 135.000</p>
          <button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg">
            Edit
          </button>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <img
            src="https://www.seedblossompod.com.au/images/products/medium/v0tlpgfbf4.jpg"
            className="rounded-lg mb-3 w-full h-48 object-cover"
            alt="Seed Blossom Pod"
          />
          <h3 className="text-lg font-bold">Seed Blossom Pod</h3>
          <p className="text-gray-600 text-sm mt-1">Artificial Flower</p>
          <p className="text-pink-600 font-bold mt-2">Rp 135.000</p>
          <button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg">
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
