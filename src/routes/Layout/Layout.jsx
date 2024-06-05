import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'src/routes/layout/layout.css'
import Navbar from "src/components/navbar/Navbar"

const Layout = () => {

  return (
    <div className="layout">
      {/* Toast Notifications */}
      <ToastContainer />
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
