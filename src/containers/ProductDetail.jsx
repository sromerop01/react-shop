import React from 'react';
import ProductInfo from '../components/ProductInfo';

const ProductDetail = () => {
    return ( 
        <aside className="product-details">
        <div className="product-close">
            <img src="./Assets/Icons/icon_close.png" alt="close"/>
        </div>
        <ProductInfo/>
    </aside>
     );
}
 
export default ProductDetail;