 import React, { useState, useEffect } from 'react';
 import NavBar from '../Components/NavBar';
 import AxiosInstance from '../utils/AxiosInstance';
 import { useContext } from 'react';
 

 const ProductAdd = () => {

     const [products, setProducts] = useState([]);
     const [error, setError] = useState(null);
 
     const [name, setName] = useState("");
     const [price, setPrice] = useState("");
     const [quantity, setQuantity] = useState("");
     
    

     
 async function updateProduct(name,price,quantity) {
        const response = await AxiosInstance.post("/Product", {
            id: 1,
            name: "Ashwin",
            price: 100,
        });
        if (response.status === 200) {
            getProducts();
        }
        else {
            setError(response.error);
        }

    }
    const handleChange = async () => {
    const response = await AxiosInstance.post("/Product", {
            name,
            price,
            quantity,
        });
        if (response.status === 201) {
            console.log("Product added successfully");
        }
        else {
            setError(response.error);
        }
    }

    return (
        <>
            <NavBar />
            <div className="p-50">
                <input type="text" placeholder="Enter Product Name" className="w-full p-2 border border-gray-300 rounded-md" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Enter Product Price" className="w-full p-2 border border-gray-300 rounded-md" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="number" placeholder="Enter Product Quantity" className="w-full p-2 border border-gray-300 rounded-md"  value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                <button onClick={handleChange} className="w-full bg-blue-500 text-white px-4 py-2 rounded-md gap-9">Add Product</button>
                
            </div>
        </>
        
    )

 }
    
 export default ProductAdd
