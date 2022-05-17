import React, {useEffect, useState} from 'react'
import './Product.css'
import company from '../../../images/company.jpg'
const Products = () => {


    const [Products, setProducts] = useState([])

    const url =  process.env.REACT_APP_PRODUCTS_URL;

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setProducts(data.data))
   
    }, [])
    
    console.log(Products)

  return (
    <div className='container'>
       {
        Products ? Products.map((Products, idx )=> (
          <div key={idx} className='card'>

            <div className='image'>
              <img src={company} alt="icon" />
            </div>
  
            <div>
              
                <h5>Name: {Products.name}</h5>
                 <p className='it'>net_price: {Products.net_price}</p>
                 <p className='it'> Taxes:{ Products.taxes} </p>
                 <p className='it'>price: {Products.price}</p>
              
            </div>
  
        </div>
  
        ) )
        : null
      }

    </div>
  )
}

export default Products