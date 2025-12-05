import React, { useEffect, useState } from 'react'

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newImageFile, setNewImageFile] = useState(null)

  const formatPrice = (price) => {
    const num = typeof price === 'number' ? price : Number(price ?? 0)
    if (!num || Number.isNaN(num)) return 'Rp 0'
    return num.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })
  }

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await fetch('/api/products')
      if (!response.ok) {
        throw new Error('Gagal mengambil data produk dari server')
      }

      const data = await response.json()
      setProducts(Array.isArray(data) ? data : [])
    } catch (err) {
      console.error(err)
      setError(err.message || 'Terjadi kesalahan saat memuat produk')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleAddProduct = async (event) => {
    event.preventDefault()

    const name = newName.trim()
    if (!name) {
      window.alert('Nama produk wajib diisi')
      return
    }

    const price = Number(newPrice)
    if (!price || Number.isNaN(price)) {
      window.alert('Harga tidak valid')
      return
    }

    try {
      setError('')

      let imageUrl = null
      if (newImageFile) {
        const formData = new FormData()
        formData.append('image', newImageFile)

        const uploadRes = await fetch('/api/products/upload-image', {
          method: 'POST',
          body: formData,
        })

        if (!uploadRes.ok) {
          throw new Error('Gagal mengupload gambar produk')
        }

        const uploadData = await uploadRes.json()
        imageUrl = uploadData.imageUrl
      }

      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          price,
          category: newCategory || null,
          imageUrl,
        }),
      })

      if (!response.ok) {
        throw new Error('Gagal menambah produk baru')
      }

      const newProduct = await response.json()
      setProducts((prev) => [newProduct, ...prev])
      setNewName('')
      setNewCategory('')
      setNewPrice('')
      setNewImageFile(null)
    } catch (err) {
      console.error(err)
      setError(err.message || 'Terjadi kesalahan saat menambah produk')
    }
  }

  const handleEdit = async (product) => {
    const newName = window.prompt('Nama produk:', product.name)
    if (!newName) return

    const newPriceStr = window.prompt('Harga produk (angka):', String(product.price))
    const newPrice = Number(newPriceStr)
    if (!newPrice || Number.isNaN(newPrice)) {
      window.alert('Harga tidak valid')
      return
    }

    try {
      setError('')
      const response = await fetch(`/api/products/${product.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName, price: newPrice }),
      })

      if (!response.ok) {
        throw new Error('Gagal mengupdate produk')
      }

      const updated = await response.json()
      setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))
    } catch (err) {
      console.error(err)
      setError(err.message || 'Terjadi kesalahan saat mengupdate produk')
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-700 mb-4">Product</h2>

      <form
        onSubmit={handleAddProduct}
        className="mb-6 grid grid-cols-1 md:grid-cols-[2fr,1.5fr,1fr,2fr,auto] gap-3 items-end bg-white shadow rounded-xl p-4"
      >
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1" htmlFor="product-name">
            Nama Produk
          </label>
          <input
            id="product-name"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-400"
            placeholder="Contoh: Pink Daisy Bouquet"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1" htmlFor="product-category">
            Jenis / Kategori
          </label>
          <input
            id="product-category"
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-400"
            placeholder="Misal: Bouquet, Artificial, dll"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1" htmlFor="product-price">
            Harga (Rp)
          </label>
          <input
            id="product-price"
            type="number"
            min="0"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-400"
            placeholder="120000"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1" htmlFor="product-image">
            Gambar (dari device)
          </label>
          <input
            id="product-image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0]
              setNewImageFile(file || null)
            }}
            className="w-full text-xs text-gray-600"
          />
        </div>
        <button
          type="submit"
          className="h-10 md:h-[38px] px-4 rounded-lg bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold flex items-center justify-center mt-2 md:mt-5"
        >
          Tambah Produk
        </button>
      </form>

      {loading && (
        <div className="mb-4 text-xs md:text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
          Memuat data produk dari server...
        </div>
      )}

      {error && (
        <div className="mb-4 text-xs md:text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow rounded-xl p-4">
            <img
              src={product.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image'}
              className="rounded-lg mb-3 w-full h-48 object-cover"
              alt={product.name}
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            {product.description && <p className="text-gray-600 text-sm mt-1">{product.description}</p>}
            <p className="text-pink-600 font-bold mt-2">{formatPrice(product.price)}</p>
            <button
              type="button"
              className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg text-sm font-semibold"
              onClick={() => handleEdit(product)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
