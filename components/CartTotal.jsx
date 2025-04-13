import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CartTotal = () => {


    let cartItem = useSelector((state) => state.cartItems)
    const [subTotal, setSubTotal] = useState(0)
    const [shipping, setShipping] = useState(0)







    useEffect(() => {

            let subTotal = 0
            let shipping = 0

            cartItem.map((el)=>{
                subTotal += el.discountedPrice.replace(',' , '') * el.quantity
                shipping += el.quantity

            })

        setSubTotal(subTotal)
        setShipping( shipping * 20 )
        

    }, [cartItem])


    


    return (
        <>

            <div className='mt-10' >
                <h2 className='text-3xl font-semibold inline-block text-white ' > CART TOTAL </h2> <div className='inline-block w-[60px] mb-2 ml-2 border-2 border-white  ' ></div>
                <div className='flex justify-between items-center text-white ' > <p>SubTotal</p>  <p >₹  {subTotal}</p> </div>
                <div className='flex justify-between items-center text-white ' > <p>Shipping Free :</p>  <p >₹ {shipping}</p> </div>
                <div className='flex justify-between items-center text-white ' > <p>Total</p>  <p className='border-t-2 border-white' >₹ {subTotal + shipping}  </p>  </div>
            </div>

        </>
    )
}

export default CartTotal