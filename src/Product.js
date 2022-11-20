import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id,title,price,image,rating}) {
  const [{cart}, dispatch] =  useStateValue();

  console.log("this is the cart", cart);
  const addToCart = () => {
    // add item to basket
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
  });
};
  
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <div className='product__rating'>  
                {Array(rating).fill().map((_,i) => (
                    <p>⭐</p>
                ))}     

            </div>
            <p className='product__price'><strong>₹{price}</strong></p>
        </div>

        <img src={image} alt=" "/>

        <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;