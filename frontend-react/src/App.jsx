import { useEffect, useState } from 'react'
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
import LogoutPage from './pages/LogoutPage'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [summary, setSummary] = useState(null)
  const [summaryLoading, setSummaryLoading] = useState(false)
  const [summaryError, setSummaryError] = useState('')

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setSummaryLoading(true)
        setSummaryError('')

        const response = await fetch('/api/orders/summary')
        if (!response.ok) {
          throw new Error('Gagal mengambil ringkasan orders dari server')
        }

        const data = await response.json()
        setSummary(data)
      } catch (err) {
        console.error(err)
        setSummaryError(err.message || 'Terjadi kesalahan saat memuat ringkasan orders')
      } finally {
        setSummaryLoading(false)
      }
    }

    fetchSummary()
  }, [])

  const renderPage = () => {
    if (currentPage === 'profile') return <ProfilePage />
    if (currentPage === 'orders') return <OrdersPage />
    if (currentPage === 'products') return <ProductsPage />
    if (currentPage === 'stock') return <StockPage />
    if (currentPage === 'expenses') return <ExpensesPage />
    if (currentPage === 'reports')
      return <ReportsPage summary={summary} loading={summaryLoading} error={summaryError} />
    if (currentPage === 'settings') return <SettingsPage />
    if (currentPage === 'logout') return <LogoutPage />
    return <DashboardPage summary={summary} loading={summaryLoading} error={summaryError} />
  }

  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex min-h-screen w-full">
        <Sidebar
          currentPage={currentPage}
          onChangePage={setCurrentPage}
          pendingOrdersCount={summary?.pendingOrders || 0}
        />
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">{renderPage()}</main>
      </div>
    </div>
  )
}

export default App
