import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ApiRequest from 'src/lib/ApiReqest'

const SingleRestaurantPage = () => {
    const { id } = useParams()
    let navigate = useNavigate()
    const [restaurant, setRestaurant] = useState({
        name: '',
        address: '',
        telephone: '',
    })
    const [error, setError] = useState("")

    useEffect(() => {
        loadRestaurant()
    }, [])

    const loadRestaurant = async () => {
        try {
            const res = await ApiRequest.get(`/restaurants/${id}`)
            setRestaurant(res.data)
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    const deleteRestaurant = async () => {
        try {
          await ApiRequest.delete(`/restaurants/${id}`);
          navigate('/');
        } catch (error) {
          setError(error.response.data.message);
        }
      };
    
      const handleDeleteClick = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this restaurant?');
        if (confirmDelete) {
          deleteRestaurant();
        }
      };

    return (
        <div className='container'>
            <div className='row'>
                {error ? (
                    <>
                    <div className="alert alert-danger">{error}</div>
                    <div className='text-center align-middle'>
                            <Link className='btn btn-primary mx-2 m-4 ' to={"/"}> Back to List</Link>
                        </div>
                    </>
                ) : ( 
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <h2 className='text-center m-4'>View Restaurant : {restaurant.name}</h2>
                        <div className='card'>
                            <div className='card-header'>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>
                                        <b>ID :</b>
                                        {restaurant._id}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Name :</b>
                                        {restaurant.name}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Address :</b>
                                        {restaurant.address}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Telephone :</b>
                                        {restaurant.telephone}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Created at :</b>
                                        {new Date(restaurant.createdAt).toLocaleString()}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Updated at :</b>
                                        {new Date(restaurant.updatedAt).toLocaleString()}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='text-center align-middle'>
                            <Link className='btn btn-outline-success mx-2' to={`/restaurant/edit/${restaurant._id}`}> Edit </Link>
                            <button className='btn btn-danger mx-2' onClick={handleDeleteClick}> Delete </button>
                            <Link className='btn btn-primary mx-2 m-4 ' to={"/"}> Back to List </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleRestaurantPage
