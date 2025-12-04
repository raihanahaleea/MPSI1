import React from 'react'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'orders', label: 'Orders', icon: 'shopping_cart' },
  { id: 'products', label: 'Products', icon: 'inventory_2' },
  { id: 'stock', label: 'Stock', icon: 'archive' },
  { id: 'expenses', label: 'Expenses', icon: 'paid' },
  { id: 'reports', label: 'Reports', icon: 'bar_chart' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
]

function Sidebar({ currentPage, onChangePage }) {
  return (
    <aside className="flex flex-col w-64 bg-container-light dark:bg-container-dark border-r border-border-light dark:border-border-dark p-4 shrink-0">
      <button
        type="button"
        onClick={() => onChangePage('profile')}
        className="flex items-center gap-3 mb-8 cursor-pointer text-left"
      >
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          data-alt="Company logo for Metronix Inc."
          style={{
            backgroundImage:
              'url("https://cdn.rri.co.id/berita/Bogor/o/1724152335421-images_(2)/f4lbrco96ts398f.jpeg")',
          }}
        ></div>
        <div className="flex flex-col">
          <h1 className="text-text-primary-light dark:text-text-primary-dark text-base font-bold leading-normal">
            Bydeflowers
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
            Admin Account
          </p>
        </div>
      </button>

      <nav className="flex flex-col gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = currentPage === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChangePage(item.id)}
              className={`flex items-center gap-3 px-3 py-2 rounded text-left transition ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-text-primary-light dark:text-text-primary-dark hover:bg-primary/10'
              }`}
            >
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <p className={`text-sm font-medium leading-normal ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </p>
            </button>
          )
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <button
          type="button"
          onClick={() => onChangePage('support')}
          className="flex items-center gap-3 px-3 py-2 rounded text-left text-text-primary-light dark:text-text-primary-dark hover:bg-primary/10"
        >
          <span className="material-symbols-outlined text-xl">help</span>
          <p className="text-sm font-medium leading-normal">Support</p>
        </button>
        <button
          type="button"
          onClick={() => onChangePage('logout')}
          className="flex items-center gap-3 px-3 py-2 rounded text-left text-text-primary-light dark:text-text-primary-dark hover:bg-primary/10"
        >
          <span className="material-symbols-outlined text-xl">logout</span>
          <p className="text-sm font-medium leading-normal">Logout</p>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
