import { Outlet } from "react-router-dom"
import 'src/routes/Layout/layout.css'
import NavigationBar from "src/components/Navbar/Navbar"

const Layout = () => {

  return (
    <div className="layout">
      <div className="navbar">
       <NavigationBar/>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
