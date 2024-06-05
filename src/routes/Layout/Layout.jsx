import { Outlet } from "react-router-dom"
import 'src/routes/layout/layout.css'
import Navbar from "src/components/navbar/Navbar"

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
