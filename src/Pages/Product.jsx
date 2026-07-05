import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import AxiosInstance from '../utils/AxiosInstance';
import { useContext } from 'react';



const Product = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    async function getProducts() {
        const response = await AxiosInstance.get("/Product");
        if (response.status === 200) {
            setProducts(response.data);

        }
        else {
            setError(response.error);

        }

    }

   useEffect(() => {
        getProducts();
    }, []);

   


    return (
        <>
            <NavBar />
            <div className="p-50">
                <h1 className='text-2xl font-bold text-center text-blue-800'>Product</h1>
                {products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </>
    )

}


export default Product