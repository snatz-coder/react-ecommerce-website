import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScrean (props) {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProduct(data);
    }
    fetchData();
    return () => {
        //
    }
  }, [])


    return   <ul className="products">
    {
      products.map(product => 
        <li key={ product._id }>
        <div className="product">
        <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product"></img></Link>
          <div className="product-name"><Link to={'/product/' + product._id}>{product.name}</Link></div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">{product.rating} Stars with ({product.numReviews} reviews</div>
        </div>
      </li>)
    }
      
    </ul>
}

export default HomeScrean;