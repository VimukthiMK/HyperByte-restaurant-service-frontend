// src/routes/notFoundPage/NotFoundPage.js
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="container text-center">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="btn btn-primary" to="/">Go to Home</Link>
    </div>
  )
}

export default NotFoundPage
