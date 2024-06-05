import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Layout from 'src/routes/layout/Layout'
import Restaurants from 'src/routes/resturantPage/ResturantPage'
import NewRestaurantPage from 'src/routes/newRestaurantPage/NewRestaurantPage'

function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* routes */}
        <Route path="/" element={<Restaurants/>}/>
        <Route path="/create" element={<NewRestaurantPage/>}/>
      </Route>
    </Routes>
  </Router>
  )
}

export default App
