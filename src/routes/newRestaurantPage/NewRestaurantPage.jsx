import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DOMPurify from 'dompurify' // For input Sanitization
import ApiRequest from 'src/lib/ApiReqest'
import ToastNotification from 'src/components/toastNotification/ToastNotification' // Toast
import FormValidation from 'src/components/formValidation/FormValidation' // Form Validation

const NewRestaurantPage = () => {
    let navigate = useNavigate()
    const [restaurant, setRestaurant] = useState({
        name: '',
        address: '',
        telephone: '',
    })
    const [errors, setErrors] = useState({})

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

    // Submission
    const onSubmit = async (e) => {
        e.preventDefault()
        // Form Validation
        const validationErrors = FormValidation(restaurant.name, restaurant.address, restaurant.telephone)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }
        try {
            const res = await ApiRequest.post('/restaurants', restaurant)
            ToastNotification(res.data.message,'success')
            navigate('/')
        } catch (error) {
            ToastNotification(error.response.data.message,'error')
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Add New Restaurant</h2>

                    <form onSubmit={onSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <input
                                type='text'
                                name='name'
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                value={restaurant.name}
                                onChange={onInputChange}
                                placeholder='Enter Restaurant Name'
                                required
                            />
                            {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='address' className='form-label'>Address</label>
                            <input
                                type='text'
                                name='address'
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                value={restaurant.address}
                                onChange={onInputChange}
                                placeholder='Enter the Address'
                                required
                            />
                            {errors.address && <div className='invalid-feedback'>{errors.address}</div>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='telephone' className='form-label'>Telephone</label>
                            <input
                                type='text'
                                name='telephone'
                                className={`form-control ${errors.telephone ? 'is-invalid' : ''}`}
                                value={restaurant.telephone}
                                onChange={onInputChange}
                                placeholder='Enter mobile number'
                                required
                            />
                            {errors.telephone && <div className='invalid-feedback'>{errors.telephone}</div>}
                        </div>
                        <div className='text-center align-middle'>
                            <button type='submit' className='btn btn-primary mx-2'> Submit </button>
                            <Link className='btn btn-outline-danger mx-2' to='/'> Cancel </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewRestaurantPage
