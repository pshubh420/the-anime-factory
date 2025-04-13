import { i, li, p } from 'motion/react-client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const ProductPage = () => {
    const url = new URL(window.location.href)
    const productId = new URLSearchParams(url.search).get('id')
    const products = useSelector((state) => state.products)
    const product = products.find((el)=> {return el.id == productId} )

    const [sizeSelected , setSizeSlected] = useState('')
    const [selectSizeWarning , setSelectSizeWarning] = useState(true)

    const dispach = useDispatch()
    const [image , setImage] = useState(0)
    const specs = ['Fabric Weight: 200 GSM','Fabric: 100% Cotton','Fit: Oversized Tee','Occasions: Casual','Pattern: Combed Cotton','Wash Care: Machine Wash','Weave Type: Knitted','Neck: Crew Neck','Sleeve Type: Long Sleeve']

    return (
        <>
            <div className='h-[130px] bg-black ' ></div>
            <div className=' bg-black flex ' >
                {/* images & specs */}
                <div className='sm:w-[60%] flex flex-col sm:flex-row gap-10 bg-black m-auto ' >
                    <div className='  sm:w-[50%] flex flex-col  ' >
                        <img src={product.images[image]} className=' w-full sm:h-[70vh] object-cover ' alt={product.title} />
                        <div className='flex gap-2 my-5  h-[100px] ' >

                            {
                                product.images.map((el , idx) => {
                                    return <img src={el} onClick={()=>{setImage(idx)}} className='h-full object-cover ' alt={el.title} />
                                })
                            }

                        </div>
                        <p className='text-white font-semibold text-xl' >{` ${product.title} - Oversized - Unisex - 100% Cotton - Best in Class Fabric Available in India.`} </p>
                        <ul className='ml-10' >
                           {
                            specs.map((el)=>{
                                return <li className='text-white font-semibold text-lg list-disc' >{el}</li>
                            })
                           }
                        </ul>


                    </div>

                    {/* name price sizechart  */}
                    <div className='flex flex-col gap-10 ' >

                        <h3 className='text-6xl text-white ' >{product.title}</h3>
                        <div>
                            <p className='inline text-white text-2xl font-semibold line-through ' >₹{product.originalPrice}</p> <p className='inline text-white text-2xl font-semibold ml-5' >₹{product.discountedPrice}</p>
                            <p className='text-base font-semibold text-white' >Sales Tax Included | Free Shipping </p>
                        </div>
                        <div className='flex gap-5 ' >
                            {
                                ['m','l','xl','xxl'].map((el , idx)=>{
                                    return <p className={`border-1  py-3 px-5  ${sizeSelected === el ? 'bg-white text-black' : 'text-white'} cursor-pointer `}  key={idx}  onClick={()=>{setSizeSlected(el) ; setSelectSizeWarning(false)}} >{el.toUpperCase()}</p>
                                })
                            }

                        </div>
                        {
                           selectSizeWarning &&  <p className='text-red-700' > Please Select Size </p>
                        }
                        {
                            product.inStock ? <button className={`border-2 w-full rounded-lg p-3  font-bold  ${sizeSelected === '' ? 'bg-gray-700' : 'bg-white' }  text-black cursor-pointer `} disabled={sizeSelected === ''} onClick={() => {
                                  
                                dispach(addToCart({...product , size : sizeSelected}))
                            }}  >Add To Cart</button> : <h3> Out Of Stock </h3>
                        }

                        <table className='text-white overflow-x-scroll ' >
                            <tbody>

                            <tr >
                                <th className='border-1 border-white w-[40px] py-5 ' >NOMS</th>
                                <th className='border-1 border-white w-[40px] py-5 ' >S</th>
                                <th className='border-1 border-white w-[40px] py-5 ' >M</th>
                                <th className='border-1 border-white w-[40px] py-5 ' >L</th>
                                <th className='border-1 border-white w-[40px] py-5 ' >XL</th>
                                <th className='border-1 border-white w-[40px] py-5 ' >XXL</th>
                                <th className='border-1 border-white w-[40px] py-5 ' >XXXL</th>
                            </tr>
                            <tr>
                                <th className='border-1 border-white w-[40px] py-5  text-center' > CHEST </th>
                                <td className='border-1 border-white w-[40px] py-5  text-center' >45</td>
                                <td className='border-1 border-white w-[40px] py-5  text-center' >47 </td>
                                <td className='border-1 border-white w-[40px] py-5  text-center' >49</td>
                                <td className='border-1 border-white w-[40px] py-5 text-center ' >51</td>
                                <td className='border-1 border-white w-[40px] py-5  text-center' >53</td>
                                <td className='border-1 border-white w-[40px] py-5  text-center' >55</td>
                            </tr>
                            <tr>
                                <th className='border-1 border-white w-[40px] py-5  text-center' > Shoulder </th>
                                <td className='border-1 border-white w-[40px] py-5  text-center' >21</td>
                                <td className='border-1 border-white w-[40px] py-5  text-center' >22 </td>
                                <td className='border-1 border-white w-[40px] py-5  text-center' >23</td>
                                <td className='border-1 border-white w-[40px] py-5 text-center ' >24</td>
                                <td className='border-1 border-white w-[40px] py-5  text-center' >25</td>
                                <td className='border-1 border-white w-[40px] py-5  text-center' >26</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductPage