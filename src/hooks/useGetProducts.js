import { useEffect, useState } from "react";

const useGetProduct = (API) => {
    const [products, setProducts]= useState([]);
    
    // useEffect(async () => {
    //     const response = await fetch(API);
    //     const data = await response.json();
    //     setProducts(data);
    // }, []);

    //FORMA RECOMENDADA POR LA DOCUMENTACION DE REACT
    useEffect(() => {
        async function fetchData(){
            const response = await fetch(API);
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);

    return products;
}
 
export default useGetProduct;