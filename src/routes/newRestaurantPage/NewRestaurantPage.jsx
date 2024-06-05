import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ApiRequest from "src/lib/ApiReqest"
import ToastNotification from 'src/components/toastNotification/ToastNotification'

const NewRestaurantPage = () => {
    let navigate = useNavigate()
    const [restaurant, setRestaurant] = useState({
        name: '',
        address: '',
        telephone: '',
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setRestaurant((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await ApiRequest.post("/restaurants", restaurant)
        ToastNotification(res.data.message)
        navigate("/")
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow  '>
                    <h2 className='text-center m-4'>Add New Restaurant</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label for="name" className="form-label" >Name</label>
                            <input type={"text"} name='name' className="form-control" value={restaurant.name} onChange={onInputChange} placeholder="Enter Restaurant Name" required />
                        </div>
                        <div className="mb-3">
                            <label for="address" className="form-label" >Address</label>
                            <input type={"text"} name='address' className="form-control" value={restaurant.address} onChange={onInputChange} placeholder="Enter the Address" required />
                        </div>
                        <div className="mb-3">
                            <label for="telephone" className="form-label">Telephone</label>
                            <input type={"text"} name='telephone' value={restaurant.telephone} onChange={onInputChange} placeholder="Enter mobile number" className="form-control" />
                        </div>
                        <div className='text-center align-middle'>
                            <button type="submit" className='btn btn-primary mx-2'> Submit </button>
                            <Link className='btn btn-outline-danger mx-2' to={"/"}> Cancel </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewRestaurantPage
