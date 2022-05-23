import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AddProduct, EditProduct, ShowProduct } from '../components'

const AppRouter = () => {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<ShowProduct />} />
          <Route path='add' element={<AddProduct />} />
          <Route path='edit/:id' element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter