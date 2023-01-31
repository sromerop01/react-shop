import React, { useEffect, useState } from 'react';
import ProductItem from 'components/ProductItem';
import style from 'styles/ProductList.scss';
import axios from 'axios';

const API ='https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const [products, setProducts]= useState([]);

    useEffect(async () => {
        const response = await fetch(API);
        const data = await response.json();
        setProducts(data);
    }, [])

    return (
        <section className="main-container">
        <div className="cards-container">
            {products.map( products => (
                <ProductItem/>
            ))}
        </div>
    </section>
    );
}
 
export default ProductList;