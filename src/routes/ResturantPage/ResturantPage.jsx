import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ApiRequest from "src/lib/ApiReqest"

const ResturantPage = () => {
  const [restaurants, setRestaurants] = useState([])
  const [page, setPage] = useState(1) //current page
  const [totalPages, setTotalPages] = useState(0) //total pages

  useEffect(() => {
    loadRestaurants()
  }, [page])

  const loadRestaurants = async () => {
    const res = await ApiRequest.get(`/restaurants?page=${page}&limit=8`)

    setRestaurants(res.data.restaurants)
    setTotalPages(Math.ceil(res.data.total / res.data.limit)) //Total pages
  }

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  return (
    <div className='container'>
     <div className='d-flex justify-content-between align-items-center pt-4'>
        <h2>Restaurant List</h2>
        <Link to={`/create`} className="btn btn-warning">Add new</Link>
      </div>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr className='text-center align-middle'>
              <th scope="col">Restaurant ID</th>
              <th scope="col">Restaurant Name</th>
              <th scope="col">Tel</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr className='text-center align-middle' key={restaurant._id}>
                <th scope='row'>{restaurant._id}</th>
                <td>{restaurant.name}</td>
                <td>{restaurant.telephone}</td>
                <td>
                  <Link className='btn btn-secondary mx-2' to={`/restaurant/${restaurant._id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination - Set 8 records per each */}

      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(page - 1)}>Previous</button>
          </li>
          {[...Array(totalPages).keys()].map((num) => (
            <li key={num + 1} className={`page-item ${page === num + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(num + 1)}>{num + 1}</button>
            </li>
          ))}
          <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(page + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ResturantPage
