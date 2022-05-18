import { useState, useEffect } from 'react';
import './Product.css';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    const url = 'https://fakerapi.it/api/v1/products?_quantity=10';
    const res = await fetch(url);
    const { data } = await res.json();

    setProducts(data);
  }


  return (
    <div className='wrapper'>
      <div className='products__container'>
        <h1 className='title'>Products</h1>
        <div className='products__grid'>
          {products && products.map(product => (
            <div className="product__card" key={product.id}>
              <img src={product.image} alt="product" className="product__image" />
              <div className="product__details">
                <p className="product__name"> <strong>Name:</strong> {product.name} </p>
                <p className="net__price"> <strong>Net Price:</strong> ${product.net_price}</p>
                <p className="tax"> <strong>Taxes:</strong> {product.taxes}%</p>
                <p className="price"> <strong>Price:</strong> ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products