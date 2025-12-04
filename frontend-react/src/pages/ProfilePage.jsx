import React from 'react'

function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
        Profil Akun Admin
      </h1>

      <div className="bg-container-light dark:bg-container-dark rounded-xl shadow p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center p-4 border-b md:border-b-0 md:border-r border-border-light dark:border-border-dark md:w-1/4">
            <div className="relative size-24 mb-4">
              <div className="size-full rounded-full bg-pink-primary/20 flex items-center justify-center text-gray-500">
                <span
                  className="material-symbols-outlined text-4xl text-pink-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  person
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
              Della Khairunnisa
            </h3>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Administrator Utama
            </p>
          </div>

          <div className="md:w-3/4">
            <h4 className="text-xl font-semibold mb-4 text-pink-primary">Informasi Dasar</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value="Della Khairunnisa"
                  className="w-full p-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-container-dark text-text-primary-light dark:text-text-primary-dark"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value="della.admin"
                  className="w-full p-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-container-dark text-text-primary-light dark:text-text-primary-dark"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value="della.a@bydeflowers.com"
                  className="w-full p-2 border border-border-light dark:border-border-dark rounded-lg bg-gray-100 dark:bg-container-dark/70 text-text-secondary-light dark:text-text-secondary-dark"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-1">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  value="0812-3456-7890"
                  className="w-full p-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-container-dark text-text-primary-light dark:text-text-primary-dark"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
