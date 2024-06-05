import { Outlet } from "react-router-dom"
import 'src/routes/Layout/layout.css'
import Navbar from "src/components/Navbar/Navbar"

const Layout = () => {

  return (
    <div className="layout">
      <div className="navbar">
       <Navbar/>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
