import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import TempSlider from '../components/TempSlider'

const ShopPage = () => {

  let products = useSelector((state) => state.products)

  return (
    <>
      <div className='w-full bg-black ' >
        <div className='bg-black h-[50px] sm:h-[100px]' >

          
        </div>
        <div className='w-full bg-white' >
          <TempSlider />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  w-[80%] m-auto pt-20' >

          {
            products.length > 0 ? products.map((el) => {
              return <ProductCard product={el} />
            }) : <h3>no product available</h3>

          }
        </div>

      </div>

    </>
  )
}

export default ShopPage