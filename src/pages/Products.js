import axios from 'axios'
import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
const Products = () => {
  const products = useSelector(state=>state.products)
  console.log("prod",products)

  
  return (
    <div className='container-wrap'><h1>Products</h1></div>
  )
}

export default Products