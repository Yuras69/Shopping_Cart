 import React, { useState, useEffect } from 'react';
 import NavBar from '../Components/NavBar';
 import AxiosInstance from '../utils/AxiosInstance';
 import { useContext } from 'react';
 import { useParams } from 'react-router-dom';
 

 
 const ProductDetails = () => {

    const [product, setProduct] = useState({});
 const [error, setError] = useState(null);
    async function getProductDetails() {
        const response = await AxiosInstance.get(`/Product`);
        if (response.status === 200) {
            setProduct(response.data);
        }
        else {
            setError(response.error);
        }
    }
    getProductDetails();

    return (
        <>
          <NavBar />

        </>
    )
}
    
 export default ProductDetails
