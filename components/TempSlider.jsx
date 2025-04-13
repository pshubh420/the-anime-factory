import React, { useEffect, useState } from 'react'
import './slider.css'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import left from '/left.png'
import right from '/right.png'
import { div, h2 } from 'motion/react-client'

const TempSlider = ({homePageSlider  , shopPageSlider}) => {
    const items = useSelector((state) => state.products)

    const [products, setProducts] = useState([...items])
    const [slideNext, setSlideNext] = useState(false)
    const [slidePrev, setSlidePrev] = useState(false)
    
    
    let sliderColor = true

   

    function nextArrry() {
        let products2 = [...products]
        products2.push(products2.shift())
        setProducts([...products2])

    }

    function prevArray() {
        let products2 = [...products]
        products2.unshift(products2.pop())
        setProducts([...products2])
    }


    function nxtPrdct() {
        console.log(products)
        setSlideNext(true);
        setTimeout(() => {
            nextArrry();
             setSlideNext(false)
            console.log('next')
        }, 1100)
    }

    function prvPrdct() {
        prevArray();
        setSlidePrev(true);
        setTimeout(() => {
            setSlidePrev(false)
            console.log('prev')

        }, 1100)
    }

 

    return (
        <>
            <div className='w-full relative py-10 ' >
                        {!homePageSlider && <h2 className=' sm:text-6xl text-3xl font-bold sm:font-semibold text-center mb-5  ' > New Arrivals</h2> }
                <div className={` ${homePageSlider ? "w-[86%]" : " w-[78%] sm:w-[65%]"} m-auto  overflow-x-hidden  `} >
                    <div className={`flex gap-10 ${slideNext ? "sliderNext" : ""} ${slidePrev ? "sliderPrev" : ""}   `} >

                        {
                            products.map((el) => {
                                return <ProductCard key={el.id} product={el} sliderColor={sliderColor} homePageSlider={homePageSlider} />
                            })
                        }
                    </div>
                </div>

                <button className={`absolute top-1/3  ${homePageSlider ? "left-[0%]" : " left-[5%] sm:left-[15%]" }  `}  
                    onClick={() => {
                       !slideNext && nxtPrdct()
                    }} >
                    <img className='h-[25px]' src={left} alt="leftLogo" /> </button>
                <button className={`absolute top-1/3  ${homePageSlider ? "right-[2%]" : "  right-[5%] sm:right-[15%]"} `}
                    onClick={() => {
                       !slidePrev && prvPrdct()
                    }} >
                    <img className='h-[15px]' src={right} alt="rightLogo" />
                </button>
            </div>


        </>
    )
}

export default TempSlider