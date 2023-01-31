import React from 'react';
import '../styles/ProductInfo.scss';

const ProductInfo = () => {
    return ( 
        <div className="ProductInfoText">
            <p>$$$$$$$$</p>
            <p>Producto 1</p>
            <p>Informacion del Producto</p>
            <button className="PrimaryButton add-to-cart">
                <img src="./Assets/Icons/bt_add_to_cart.svg" alt=""/>
                Agregar al carrito
            </button>
        </div>
     );
}
 
export default ProductInfo;