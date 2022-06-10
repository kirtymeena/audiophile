import React, { useEffect, useState } from 'react'
import headphone from "../assets/image-category-page-preview-removebg-preview.png";
import speaker from "../assets/image-category-page-preview-removebg-preview(1).png";
import earphone from "../assets/image-category-page-preview-removebg-preview(2).png";

import axios from "axios"
const Categories = () => {
    const [category,setCategory]=useState()
    useEffect(()=>{
        axios.get("http://localhost:3001/categories").then(res=>{
            setCategory(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div className='container-wrap category__wrap'>
       <div>
           <h1 className='heading'>Category</h1>
       </div>
       <div className='category__img__outer'>
        {category!==undefined && category.map(cat=>
      
           
           <div key={cat.id} className='category__image'>
              <div>{cat.category.toLowerCase()==="headphones"&& <img src={headphone} className="categories" alt="headphone"/>}</div>
             
              <div>{cat.category.toLowerCase()==="speakers"&& <img src={speaker} className="categories" alt="speakers"/>}</div>
              <div>{cat.category.toLowerCase()==="earphones"&& <img src={earphone} className="categories" alt="earphone"/>}</div>
           </div>

      
        

        )}
        </div>
    </div>
  )
}

export default Categories