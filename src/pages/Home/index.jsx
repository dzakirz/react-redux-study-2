import React from 'react'
import { AddProduct, ShowProduct } from '../../components'

const Home = () => {
  return (
    <div className='container'>
      <div className="columns">
        <div className="column">
          <AddProduct />
        </div>
        <div className="column">
          <ShowProduct />
        </div>
      </div>
    </div>
  )
}

export default Home