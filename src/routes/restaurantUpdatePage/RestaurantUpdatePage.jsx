import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DOMPurify from 'dompurify' // For input Sanitization
import ApiRequest from 'src/lib/ApiReqest'
import ToastNotification from 'src/components/toastNotification/ToastNotification' // Toast
import FormValidation from 'src/components/formValidation/FormValidation' // Form Validation

const RestaurantUpdatePage = () => {
    let navigate = useNavigate()
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState({
        name: '',
        address: '',
        telephone: '',
    })
    const [valErrors, setValErrors] = useState({}) // For Client side form validation error handeling
    const [error, setError] = useState('')

    // input sanitization
    const sanitizeInput = (input) => {
        return DOMPurify.sanitize(input)
    }

    const onInputChange = (e) => {
        const { name, value } = e.target
        setRestaurant((prevData) => ({
            ...prevData,
            [name]: sanitizeInput(value),
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = FormValidation(restaurant.name, restaurant.address, restaurant.telephone)
        if (Object.keys(validationErrors).length > 0) {
            setValErrors(validationErrors)
            return
        }
        try {
            const submit = await ApiRequest.put(`/restaurants/${id}`, restaurant)
            ToastNotification(submit.data.message)
            navigate(`/restaurant/${id}`)
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    useEffect(() => {
        loadRestaurant()
    }, [])

    // Load restaurant Data
    const loadRestaurant = async () => {
        try {
            const res = await ApiRequest.get(`/restaurants/${id}`)
            setRestaurant(res.data)
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                {error ? (
                    <>
                        <div className='alert alert-danger'>{error}</div>
                        <div className='text-center align-middle'>
                            <Link className='btn btn-primary mx-2 m-4' to={'/'}>Back to List</Link>
                        </div>
                    </>
                ) : (
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <h2 className='text-center m-4'>Edit Restaurant</h2>
                        <form onSubmit={onSubmit}>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    className={`form-control ${valErrors.name ? 'is-invalid' : ''}`}
                                    value={restaurant.name}
                                    onChange={onInputChange}
                                    placeholder='Enter Restaurant Name'
                                    required
                                />
                                {valErrors.name && <div className='invalid-feedback'>{valErrors.name}</div>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='address' className='form-label'>Address</label>
                                <input
                                    type='text'
                                    name='address'
                                    className={`form-control ${valErrors.address ? 'is-invalid' : ''}`}
                                    value={restaurant.address}
                                    onChange={onInputChange}
                                    placeholder='Enter the Address'
                                    required
                                />
                                {valErrors.address && <div className='invalid-feedback'>{valErrors.address}</div>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='telephone' className='form-label'>Telephone</label>
                                <input
                                    type='text'
                                    name='telephone'
                                    className={`form-control ${valErrors.telephone ? 'is-invalid' : ''}`}
                                    value={restaurant.telephone}
                                    onChange={onInputChange}
                                    placeholder='Enter mobile number'
                                    required
                                />
                                {valErrors.telephone && <div className='invalid-feedback'>{valErrors.telephone}</div>}
                            </div>
                            <div className='text-center align-middle'>
                                <button type='submit' className='btn btn-primary mx-2'>Submit</button>
                                <Link className='btn btn-outline-danger mx-2' to={`/restaurant/${id}`}>Cancel</Link>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RestaurantUpdatePage
