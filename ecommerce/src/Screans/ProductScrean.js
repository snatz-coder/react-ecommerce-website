import React from 'react';
import data from './../data';
import {Link} from 'react-router-dom';

function ProductScrean (props) {
    //console.log("hi");
    //console.log(props.match.params.id);
    const product = data.products.find(x => Number(x._id) === Number(props.match.params.id));
    //console.log(product);
    return <div>
    <div>
    <Link to="/">Back to result</Link>
    </div>
    <div className ="details">
      <div className="details-image">
          <img src={product.image} alt="product"></img>
      </div>
      <div className="details-info">
          <ul>
              <li>
                  <h4>{product.name}</h4>
              </li>
              <li>
                  {product.rating} Stars {product.numReviews} reviews
              </li>
              <li><b>{product.price}</b></li>
              <li>Description:<div>{product.description}</div></li>
          </ul>
      </div>
    </div>
    </div>

    
}

export default ProductScrean;