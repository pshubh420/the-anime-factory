import React from 'react'
import whiteLogo from '/whiteLogo.avif'
import x from '/x.png'
import youtube from '/youtube.avif'
import insta from '/insta.avif'
import facebook from '/facebook.png'
import linkedin from '/linkedin.avif'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>

            <div className='flex flex-wrap sm:flex-nowrap flex-col justify-center items-center  bg-black text-white py-10  w-full overflow-hidden box-border' >
                <div className=' w-[70%] sm:w-[60%] flex flex-col justify-center items-center gap-5  ' >

                    <h2 className=' text-4xl  sm:text-7xl  font-semibold ' >Join the Club</h2>
                    <p className=' font-semibold text-center ' > Join our email list and get access to specials deals exclusive to our subscribers.</p>
                    <form action="submit" onSubmit={(e) => { e.preventDefault() }}
                        className='relative w-full '
                    >

                        <p>Enter Your email<sup>*</sup></p>
                        <div className='flex flex-col gap-3 sm:gap-0 sm:flex-row   ' >

                            <input type="text " className='inline-block border-1 w-full sm:w-[76%] h-[40px] caret-white ' />
                            <button className='bg-[#E6C7EB] text-black border-1 border-white text-sm py-[10px] px-20 outline-none active:outline-none hover:bg-black hover:text-white transition-all duration-200 ' >Sign Up</button>
                        </div>

                    </form>

                </div>
                    <div className=' hidden sm:block w-[20%] h-0.5 mt-[80px] bg-white ' ></div>

                    <div className='w-[60%] mt-20 sm:mt-0 flex flex-col gap-10 sm:flex-row  justify-center sm:justify-between items-center  ' >
                    {/* main links */}
                        <div className='flex flex-col gap-5 justify-center  text-center sm:text-left ' > 
                        <img src={whiteLogo} alt="whiteLogo"  className='block sm:hidden  ml-4' />
                                <Link to='/about' className='font-semibold' >About Us</Link>
                                <Link to='/support' className='font-semibold' >Contact US</Link>
                                <Link to={'/faq'} className='font-semibold' >FAQ</Link>
                                <Link to='/' className='font-semibold' >Home</Link>
                                <Link to='/shop' className='font-semibold' >Shop</Link>
                        </div>
                    {/* logo and social media */}
                    <div className=' sm:ml-25 ' >
                        <img src={whiteLogo} alt="whiteLogo"  className='hidden sm:block ml-4' />
                        <div className=' sm:hidden mx-auto mb-3 w-[60%] h-0.5  bg-white ' ></div>
                        <p className='text-center sm:hidden mb-3 ' >info@theanimefactory.in </p>
                        <div className='flex gap-2' >
                            <img src={x} alt="xLogo" />
                            <img src={facebook} alt="facebookLogo" />
                            <img src={insta} alt="instaLogo" />
                            <img src={youtube} alt="youtube" />
                            <img src={linkedin} alt="linkedinLogo" />
                        </div>
                    </div>
                    
                    {/* policy links */}
                        <div className='flex flex-col gap-5 justify-center items-center  ' > 

                        <p className='font-semibold' >Privacy Policy</p>
                                <p className='font-semibold' >Terms and Conditions</p>
                                <p className='font-semibold' >Return and Refund Policy</p>
                                <p className='font-semibold' >Blogs</p>

                        </div>

                    </div>



            </div>

        </>


    )
}

export default Footer