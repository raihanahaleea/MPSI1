import React from 'react'

function SettingsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
        Settings
      </h1>

      <div className="bg-container-light dark:bg-container-dark rounded-xl shadow p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Tampilan</h2>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            (Dummy) Pengaturan tema aplikasi, mode terang/gelap mengikuti Tailwind config.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Notifikasi</h2>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            (Dummy) Di sini nantinya bisa ada toggle notifikasi untuk pesanan baru, stok menipis, dll.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
