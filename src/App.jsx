import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Layout from 'src/routes/layout/Layout'
import Restaurants from 'src/routes/resturantPage/ResturantPage'

function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* routes */}
        <Route path="/" element={<Restaurants/>}/>
      </Route>
    </Routes>
  </Router>
  )
}

export default App
