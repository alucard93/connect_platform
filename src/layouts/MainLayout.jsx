import { Outlet } from 'react-router-dom'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

export default function MainLayout() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
