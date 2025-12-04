import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import DashboardPage from './pages/DashboardPage'
import OrdersPage from './pages/OrdersPage'
import ProductsPage from './pages/ProductsPage'
import StockPage from './pages/StockPage'
import ExpensesPage from './pages/ExpensesPage'
import ReportsPage from './pages/ReportsPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import SupportPage from './pages/SupportPage'
import LogoutPage from './pages/LogoutPage'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    if (currentPage === 'profile') return <ProfilePage />
    if (currentPage === 'orders') return <OrdersPage />
    if (currentPage === 'products') return <ProductsPage />
    if (currentPage === 'stock') return <StockPage />
    if (currentPage === 'expenses') return <ExpensesPage />
    if (currentPage === 'reports') return <ReportsPage />
    if (currentPage === 'settings') return <SettingsPage />
    if (currentPage === 'support') return <SupportPage />
    if (currentPage === 'logout') return <LogoutPage />
    return <DashboardPage />
  }

  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex min-h-screen w-full">
        <Sidebar currentPage={currentPage} onChangePage={setCurrentPage} />
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">{renderPage()}</main>
      </div>
    </div>
  )
}

export default App
