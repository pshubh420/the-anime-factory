import { useDispatch, useSelector } from 'react-redux'
import deleteIcon from '/delete.png'
import { decreaseItemQuantity, increaseItemQuantity, removeFromCart } from '../store/cartSlice'
import { Link } from 'react-router-dom'
import CartTotal from '../components/CartTotal'
const CartPage = () => {

    let cartItem = useSelector((state) => state.cartItems)

    const dispatch = useDispatch()




   

    return (
        <>
            <div className='h-[100px] bg-black' ></div>
            <div className='bg-black pt-20 ' >

                <div className='w-[80%]  m-auto ' >
                    <h2 className='text-3xl font-semibold inline-block text-white ' >  YOUR CART </h2> <div className='inline-block w-[60px] mb-2 ml-2 border-2 border-white  ' ></div>

                    {
                        cartItem.length === 0 ? <p className='text-white text-3xl ' >Your cart is empty</p>

                            : cartItem.map((item) => {



                                return <div className='flex justify-between items-center mt-5 border-y-1 p-2 border-white ' key={item.id} >
                                    {/* img name price */}
                                    <div className='flex items-center gap-2  ' >

                                        <div className='h-[100px] w-[100px] p-2 overflow-hidden  ' >
                                            <img src={item.images[0]} className='object-contain h-full w-full ' alt={item.title} />
                                        </div>

                                        <div className='flex flex-col justify-center gap-5 ' >
                                            <p className='sm:text-xl font-semibold text-white ' > {item.title} </p>
                                            <h5 className='sm:text-xl font-semibold text-white  ' > {item.discountedPrice} <p className='px-2 py-1 ml-2 inline border-2 text-black bg-white ' >{item.size.toUpperCase()}</p> </h5>

                                        </div>

                                    </div>

                                    {/* quantity */}
                                    <div className='flex flex-col sm:flex-row items-center justify-center' >
                                        <button className='px-5 py-2 text-black bg-white border-white border-1' onClick={() => { dispatch(increaseItemQuantity(item))}} > + </button>
                                        <p className='px-5 py-2 text-white border-1 ' >{item.quantity}</p>
                                        <button className=' px-5 py-1 sm:py-2 text-3xl sm:text-base text-black bg-white border-white border-1' onClick={() => { dispatch(decreaseItemQuantity(item)) }} > - </button>
                                    </div>
                                    <img src={deleteIcon}  className='hidden sm:block' alt='deleteIcon' onClick={() => { dispatch(removeFromCart(item)) }} />
                                </div>

                            })
                    }




                    {/* total */}
                   
                    <CartTotal />

                    <Link to='/place_order'  className='text-black border-1 border-black px-5 py-2 bg-[#e6c7eb] mt-5 inline-block ' >PROCED TO CHECKOUT</Link >

                </div>

            </div>
        </>
    )
}

export default CartPage