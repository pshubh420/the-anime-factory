import React, { useEffect, useState } from 'react'
import logo from '/whiteLogo.avif'
import './loader.css'

const Loader = () => {

        const [animationHandler , setAnimationHandler] = useState(true)

        useEffect(()=>{

                let timerId1 = setTimeout(()=>{
                        setAnimationHandler(false)
                },3000)

                

                return ()=>{
                    clearTimeout(timerId1)
                }

        },[])

  return (
<>
<div className=' fixed w-screen h-screen z-200  pointer-events-none ' >

        <div className={`w-screen h-screen relative flex items-center justify-center ${animationHandler ? "bg-white" : "bg-none" } pointer-events-none `} >
            <img src={logo} alt="logo" className='z-100 logo w-[100px] sm:w-auto ' />
            <div className={` absolute h-full  bg-black right-[50%]  ${ animationHandler ? 'loaderIn' : 'loaderOut' } pointer-events-none  `}   ></div>
            <div className= {`absolute h-full  bg-black left-[50%]  ${ animationHandler ? 'loaderIn' : 'loaderOut' }  pointer-events-none  `}    ></div>

        </div>

</div>
</>
  )
}

export default Loader