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

   const handleClick = (product) => {
        console.log(product);
   }


    return (
        <>
            <NavBar />
            <div className="p-50">
                <h1 className='text-2xl font-bold text-center text-blue-800'>Product</h1>
                {products.map((product) => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <button onClick={() => handleClick(product)}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details of Product</button>
                    </div>
                ))}
            </div>
        </>
    )

}


export default Product