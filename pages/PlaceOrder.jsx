import React from 'react'
import CartTotal from '../components/CartTotal'
import { Link } from 'react-router-dom'

const PlaceOrder = () => {
  return (
    <>
      <div className='h-[110px] bg-black' ></div>
      <div className='bg-black w-full' >

        <div className='  sm:w-[80%] sm:m-auto flex flex-wrap sm:flex-nowrap justify-between  bg-black ' >
          <div className='pt-20 w-[100%] sm:w-auto px-10 sm:px-0 ' >
            <h3 className='text-white mb-5 text-3xl font-semibold ' >  DELIVERY DETAILS <div className=' w-[40px] sm:w-[50px] inline-block border-2 border-white mb-2 ' ></div> </h3>
            <form action="submit" className='grid grid-col-1 sm:grid-cols-2 gap-2  ' onSubmit={(e) => { e.preventDefault() }} >
              <input required type="text" placeholder='First name' className='p-5 text-white border-2 rounded-xl ' />
              <input required type="text" placeholder='Last name' className='p-5 text-white border-2 rounded-xl ' />
              <input required type="text" placeholder='Your email' className='p-5 text-white border-2 sm:col-span-2 rounded-xl ' />
              <input required type="text" placeholder='Building / Street / Apartment' className='p-5 text-white border-2  rounded-xl sm:col-span-2 ' />
              <input required type="text" placeholder='City' className='p-5 text-white border-2 rounded-xl ' />
              <input required type="text" placeholder='State' className='p-5 text-white border-2 rounded-xl ' />
              <input required type="text" placeholder='ZipCode' className='p-5 text-white border-2 rounded-xl ' />
              <input required type="text" placeholder='Country' className='p-5 text-white border-2 rounded-xl ' />
              <input required type="number" placeholder='phone' className='p-5 text-white border-2  rounded-xl sm:col-span-2 ' />
            </form>
          </div>

          <div className='pt-20 sm:w-[40%] w-[100%] px-10 sm:px-0 ' >
            <CartTotal />
            <h3 className='text-white mt-10 text-2xl font-semibold ' > PAYMENT METHOD <div className='w-[50px] inline-block border-2 border-white mb-2 ' ></div> </h3>
            <div className='border-2 border-white p-2 sm:w-[40%] mt-5 ' >
              <label htmlFor="COD" className='text-white mr-5' >CASH ON DELIVERY</label>
              <input type="radio" id='COD' />
            </div>
            <Link className='bg-white text-black mt-5 inline-block py-2 px-8' >PLACE ORDER</Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default PlaceOrder