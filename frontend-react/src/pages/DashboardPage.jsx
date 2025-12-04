import React from 'react'

function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
        <div>
          <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
            Welcome back, Della 👋
          </h1>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
            Ringkasan performa toko Bydeflowers hari ini.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm text-text-secondary-light dark:text-text-secondary-dark">
          <span className="px-3 py-1 rounded-full bg-pink-primary/10 text-pink-primary font-medium">
            Snapshot Bulan Januari 2025
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white dark:bg-container-dark rounded-xl shadow border border-pink-primary/20">
          <p className="text-xs font-medium text-text-secondary-light uppercase tracking-wide">
            Orders Today
          </p>
          <h2 className="text-2xl font-bold mt-2">24</h2>
          <p className="text-xs text-green-600 mt-1">+8 vs kemarin</p>
        </div>
        <div className="p-4 bg-white dark:bg-container-dark rounded-xl shadow">
          <p className="text-xs font-medium text-text-secondary-light uppercase tracking-wide">
            This Week
          </p>
          <h2 className="text-2xl font-bold mt-2">128</h2>
          <p className="text-xs text-green-600 mt-1">+12% vs minggu lalu</p>
        </div>
        <div className="p-4 bg-white dark:bg-container-dark rounded-xl shadow">
          <p className="text-xs font-medium text-text-secondary-light uppercase tracking-wide">
            This Month Revenue
          </p>
          <h2 className="text-2xl font-bold mt-2">Rp 12.450.000</h2>
          <p className="text-xs text-green-600 mt-1">+5% vs bulan lalu</p>
        </div>
        <div className="p-4 bg-white dark:bg-container-dark rounded-xl shadow">
          <p className="text-xs font-medium text-text-secondary-light uppercase tracking-wide">
            Active Products
          </p>
          <h2 className="text-2xl font-bold mt-2">42</h2>
          <p className="text-xs text-text-secondary-light mt-1">3 stok menipis</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 bg-white dark:bg-container-dark rounded-xl shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
                Produk Terlaris
              </h2>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                Berdasarkan jumlah pesanan minggu ini.
              </p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-background-light dark:bg-background-dark text-text-secondary-light">
              Top 3
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background-light dark:bg-background-dark rounded-xl p-4 flex flex-col">
              <img
                src="https://i.pinimg.com/736x/ec/7e/7f/ec7e7fe513ac22ed53f912e1246b686b.jpg"
                className="rounded-lg mb-3 h-32 object-cover"
                alt="Bouquet Pink Pastel"
              />
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                Bouquet Pink Pastel
              </h3>
              <p className="text-xs text-text-secondary-light">12 pesanan minggu ini</p>
              <p className="text-sm font-bold text-pink-primary mt-1">Rp 150.000</p>
            </div>

            <div className="bg-background-light dark:bg-background-dark rounded-xl p-4 flex flex-col">
              <img
                src="https://giftr.my/cdn/shop/products/21_5f0a7683-c749-4acc-9fad-dee1daf1349d_grande.jpg?v=1624936362"
                className="rounded-lg mb-3 h-32 object-cover"
                alt="Bouquet Daisy White"
              />
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                Bouquet Daisy White
              </h3>
              <p className="text-xs text-text-secondary-light">9 pesanan minggu ini</p>
              <p className="text-sm font-bold text-pink-primary mt-1">Rp 175.000</p>
            </div>

            <div className="bg-background-light dark:bg-background-dark rounded-xl p-4 flex flex-col">
              <img
                src="https://content2.flowwow-images.com/data/flowers/1000x1000/31/1752586164_25749531.jpg"
                className="rounded-lg mb-3 h-32 object-cover"
                alt="Bouquet Elegance Mix"
              />
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                Bouquet Elegance Mix
              </h3>
              <p className="text-xs text-text-secondary-light">7 pesanan minggu ini</p>
              <p className="text-sm font-bold text-pink-primary mt-1">Rp 200.000</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-container-dark rounded-xl shadow p-5 space-y-4">
          <h2 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
            Ringkasan Singkat
          </h2>
          <ul className="space-y-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            <li>
              <span className="inline-block w-3 h-3 rounded-full bg-green-400 mr-2"></span>
              18 pesanan sudah selesai hari ini.
            </li>
            <li>
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
              4 pesanan masih dalam proses pengiriman.
            </li>
            <li>
              <span className="inline-block w-3 h-3 rounded-full bg-red-400 mr-2"></span>
              2 pesanan dibatalkan oleh pelanggan.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
