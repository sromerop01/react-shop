import { useEffect, useState } from "react";

const useGetProduct = (API) => {
    const [products, setProducts]= useState([]);
    
    useEffect(async () => {
        const response = await fetch(API);
        const data = await response.json();
        setProducts(data);
    }, []);

    return products;
}
 
export default useGetProduct;