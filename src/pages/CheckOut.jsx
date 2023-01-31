import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/CheckOut.scss'

const CheckOut = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title-my-order">Mi pedido</h1>
                <div className="my-order-content">
                    <div className="my-order-info">
                        <p>
                            <span>XX/XX/XX</span>
                            <span>X Articulos</span>
                        </p>
                        <p>Total: $$$$$</p>
                    </div>
                </div>
                <OrderItem/>
            </div>
        </div>
    );
}
 
export default CheckOut;