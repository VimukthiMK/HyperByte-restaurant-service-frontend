import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Layout from 'src/routes/layout/Layout'
import Restaurants from 'src/routes/resturantPage/ResturantPage'
import NewRestaurantPage from 'src/routes/newRestaurantPage/NewRestaurantPage'
import SingleRestaurantPage from 'src/routes/singleRestaurantPage/SingleRestaurantPage'
import RestaurantUpdatePage from 'src/routes/restaurantUpdatePage/RestaurantUpdatePage'
import NotFoundPage from 'src/routes/notFoundPage/NotFoundPage' // Import the NotFoundPage component

function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* routes */}
        <Route path="/" element={<Restaurants/>}/>
        <Route path="/create" element={<NewRestaurantPage/>}/>
        <Route path="/restaurant/:id" element={<SingleRestaurantPage/>}/>
        <Route path="/restaurant/edit/:id" element={<RestaurantUpdatePage/>}/>
         {/* Not Found */}
         <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
