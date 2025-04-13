import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, setWidth, sliderColor, homePageSlider }) => {

  const [imageNumber, setImageNumber] = useState(0)
  const [quickView, setQuickView] = useState(false)
  const [showImages, setShowImages] = useState(false)



  const [imageIndex, setImageIndex] = useState(0)
  

  useEffect(() => {
    if (showImages) {
      setTimeout(() => {
        if (imageIndex >= product.images.length - 1) {
          setImageIndex(0)
        } else {
          setImageIndex((prev) => prev + 1)
        }
      }, 1000)
    }
  }, [showImages, imageIndex])


  return (

    <>
      {showImages &&
        <div className='fixed top-0 left-0 h-[90vh] mt-[100px] w-full bg-black flex justify-center items-center z-10' >
          <div className='absolute right-4 top-0 text-white cursor-pointer ' onClick={() => { setShowImages(false) }} >close</div>

          <img src={product.images[imageIndex]} alt={product.title} />
        </div>

      }
      <Link to={`/product?id=${product.id}`} className={`flex flex-col gap-5 text-white relative min-w-[300px] max-w-[300px] ${homePageSlider &&  'border-2 border-black' }`} onMouseEnter={() => { setImageNumber(1); setQuickView(true) }} onMouseLeave={() => { setImageNumber(0); setQuickView(false) }}

      >
        <div className='relative' >
          <img className='transition-all h-[300px] w-[300px] object-cover' src={product?.images[imageNumber]} alt={product.title} />

          <div className={`absolute overflow-hidden h-0 w-full bottom-0  transition-all duration-100 opacity-60 cursor-pointer text-center ${quickView && "h-10"} ${sliderColor ? "bg-black text-white" : "bg-white text-black"}`}
            onClick={() => { setShowImages(true); }} >
            <h2 className='mt-2 opacity-100'>Quick View</h2>
          </div>


        </div>
        <div className='pl-1 flex flex-col gap-5 items-center relative ' >
          <h3 className={`font-semibold ${sliderColor && "text-black"} `} >{product.title}</h3>
          <div className={`w-10 border-2 ${sliderColor ? "border-black" : "border-white "} `} ></div>

          <div className={`border-2 w-full rounded-lg p-3 border-black mr-1 text-center font-bold ${sliderColor ? "bg-black text-white" : " bg-white text-black"} `} >View Product</div>


        </div>


      </Link >

    </>
  )
}

export default ProductCard