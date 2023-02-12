import React,{ useContext } from 'react';
import AppContext from '../context/AppContext';
import style from 'styles/MyOrder.scss';
import Arrow from 'icons/flechita.svg';
import Close from 'icons/icon_close.png';
import AddCart from 'icons/bt_add_to_cart.svg';
import OrderItem from '../components/OrderItem';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    return ( 
        <aside className="shopping-cart">
            <div className="shopping-cart-container">
                <div className="title-container">
                    <img src={Arrow} alt="arrow"/>
                    <p className="title-container">Mi Orden</p>
                </div>
                <div className="shopping-cart-content">
                    {state.cart.map((product, index) =>(
                        <OrderItem  
                            indexValue={index}
                            key={index}
                            product={product}
                        />
                    ))}
                    <div className="my-order-info">
                        <p>
                            <span>Total</span>
                        </p>
                        <p>${sumTotal()}</p>
                    </div>
                    <button className="primary-button add-to-cart">
                        <img src={AddCart} alt=""/>
                        Confirmar
                    </button>
                </div>
            </div>
        </aside>
     );
}
 
export default MyOrder;