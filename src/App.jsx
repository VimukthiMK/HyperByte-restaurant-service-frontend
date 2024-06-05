import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' //React Boostrap
import './App.css'

import Layout from 'src/routes/Layout/Layout'

function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* routes */}
      </Route>
    </Routes>
  </Router>
  )
}

export default App
