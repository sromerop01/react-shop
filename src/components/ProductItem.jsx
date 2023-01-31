import React from 'react';
import '../styles/ProductItem.scss';


const ProductItem = () => {
    return ( 
        <div className="ProductItem">
            <img src="./Assets/switch.jfif" alt=""/>
            <div className="ProductInfo">
                <div>
                    <p>$$$$$$$</p>
                    <p>Producto 1</p>
                </div>
                <figure>
                    <img src="./Assets/Icons/bt_add_to_cart.svg" alt="cart"/>
                </figure>
            </div>
        </div>
     );
}
 
export default ProductItem;