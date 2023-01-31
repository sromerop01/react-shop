import React, { useState } from 'react';
import '../styles/ProductItem.scss';
import Image from 'images/switch.jfif';
import IconAddCart from 'icons/bt_add_to_cart.svg';


const ProductItem = () => {
    const [cart, setCart] =useState([]);
    const handleClick = () =>{
        setCart([]);
    }

    return ( 
        <div className="ProductItem">
            <img src={Image} alt=""/>
            <div className="ProductInfo">
                <div>
                    <p>$$$$$$$</p>
                    <p>Producto 1</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={IconAddCart} alt="cart"/>
                </figure>
            </div>
        </div>
     );
}
 
export default ProductItem;