import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-dark" style={{ width: '100%', height: '100%', borderRadius: '10px' }}>
            <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand" href="/">Restaurant System</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* off canvas */}
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Restaurant System</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    {/* canvas body */}
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/dashboard" activeClassName="active" aria-current="page">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/" activeClassName="active" aria-current="page">All Restaurants</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/create" activeClassName="active" aria-current="page">Add New Restaurant</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
