import React from 'react'

function SupportPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
        Support
      </h1>
      <p className="text-text-secondary-light dark:text-text-secondary-dark">
        Jika kamu butuh bantuan terkait dashboard Bydeflowers, hubungi kontak berikut (dummy data):
      </p>
      <ul className="space-y-2 text-sm text-text-primary-light dark:text-text-primary-dark">
        <li>
          <span className="font-semibold">Email:</span> support@bydeflowers.com
        </li>
        <li>
          <span className="font-semibold">WhatsApp:</span> +62-812-0000-0000
        </li>
      </ul>
    </div>
  )
}

export default SupportPage
