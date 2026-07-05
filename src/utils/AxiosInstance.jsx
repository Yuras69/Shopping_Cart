import React from 'react'
import axios from 'axios'


const AxiosInstance = axios.create({
  baseURL: "https://6a49e594edfa6a2b5fd76ca6.mockapi.io/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});


export default AxiosInstance
