import React from 'react'

function LogoutPage() {
  return (
    <div className="max-w-md mx-auto text-center space-y-4">
      <span
        className="material-symbols-outlined text-5xl text-pink-primary"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        logout
      </span>
      <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
        Logged Out (Demo)
      </h1>
      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
        Ini hanya tampilan demo. Belum ada sistem autentikasi sungguhan.
      </p>
    </div>
  )
}

export default LogoutPage
