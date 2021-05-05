import React from 'react';
import data from './../data';
import {Link} from 'react-router-dom';

function ProductScrean (props) {
    //console.log("hi");
    //console.log(props.match.params.id);
    const product = data.products.find(x => Number(x._id) === Number(props.match.params.id));
    //console.log(product);
    return <div>
    <div className="backToResult">
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
              <li>Price: <b>${product.price}</b></li>
              <li>Description:<div>{product.description}</div></li>
          </ul>
      </div>
      <div class="details-action">
        <ul>
            <li>
                Price: $ {product.price}
            </li>
            <li>
                Status: {product.satus}
            </li>
            <li>
                Qty: <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </li>
            <li>
                <button className="button">Add to Cart</button>
            </li>
        </ul>
      </div>
    </div>
    </div>

    
}

export default ProductScrean;