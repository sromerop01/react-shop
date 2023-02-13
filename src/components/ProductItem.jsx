import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import IconAddCart from 'icons/bt_add_to_cart.svg';
import IconAddedCart from '../assets/Icons/bt_added_to_cart.svg';
import AppContext from '../context/AppContext';


const ProductItem = ({product}) => {
    const { addToCart, removeFromCart, state } = useContext(AppContext);

    const itsProductAdded = () => state.cart.some(item => item.id === product.id) ? true : false;

    const handleClick = item =>{
        itsProductAdded() ? removeFromCart(item) : addToCart(item);
    }

    return ( 
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title}/>
            <div className="ProductInfo">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={()=> handleClick(product)}>
                    {itsProductAdded() 
                    ? <img src={IconAddedCart} alt="AddedCart"/>
                    : <img src={IconAddCart} alt="AddCart"/>}
                </figure>
            </div>
        </div>
     );
}
 
export default ProductItem;