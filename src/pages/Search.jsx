

import React, { useContext,useEffect,useState } from 'react'
import { AppContext } from '../context/Appcontext';
import SingleProduct from '../components/SingleProduct';
function Search() {
    const {setCategory,searchItem,allProducts,setAllProducts}=useContext(AppContext)
    const [query,setQuery]=useState('');
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      searchItem(query)
    }
   
    useEffect(()=>{
        setAllProducts(null)
    },[])

    useEffect(()=>{
        const linkItem=document.querySelector('#search')
        linkItem.classList.add('active')    
        return(()=>{
          linkItem.classList.remove('active')
        })
      },[])
   
  return (
    <>
    <div className='container d-flex justify-content-center flex-column align-items-center'>
        <p className='lead text-warning fw-bold'>Find a product of your choice.</p>
        <form onSubmit={handleSubmit} ><input value={query} onChange={((e)=>{setQuery(e.target.value)})} type='text' placeholder='Search a product...' className='p-2' ></input><button type='submit' className='btn px-3 py-2 mx-2 btn-primary btn-sm'>Search</button></form >
        <div className="d-flex flex-wrap">
        {allProducts && allProducts.length>0 &&
        allProducts.map((singleProduct)=>{
          return <div key={singleProduct.id} className='col-md-4 col-lg-3 col-6'><SingleProduct singleProduct={singleProduct}/></div>
        })
      }
      {
        allProducts && allProducts.length<1 && <p className='m-3 text-danger lead'>Sorry, no items match your search. </p>
      }
    </div>
    </div>

    </>
  )
}

export default Search
