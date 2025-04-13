import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '/cart.png'
import logo from "/logo.avif"
import { useSelector } from 'react-redux'
import menu from '/menu.png'
import close from '/close.png'
import '../src/App.css'
import './header.css'

const Header = () => {

    let cart = useSelector((state) => state.cartItems);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [animationSetter, setAnimetionSetter] = useState(true);

    const headerNav = ["Home", "About", "FAQ", "Support", "Shop" ];

    return (
        <div className='w-full bg-black fixed z-20'>
            <div className='flex justify-between items-center w-[90vw] sm:w-[65vw] m-auto py-3 relative'>
                {/* Mobile Menu Button */}
                <div className='h-[30px]'>
                    <img
                        src={menu}
                        className='h-full sm:hidden'
                        onClick={() => setIsMenuActive(true)}
                        alt="Menu"
                    />
                    {/* Mobile Menu Dropdown */}
                    <div className={` ${isMenuActive ? '' : 'hidden'} sm:hidden absolute bg-black w-[415px] h-screen top-0 left-[-10%] p-7 z-100 ${animationSetter ? 'mobileMenuopen' : 'mobileMenuClose'}`}>
                        <img
                            src={close}
                            className='p-2 h-[40px] w-[35px]'
                            onClick={() => {
                                setAnimetionSetter(false);
                                setTimeout(() => {
                                    setIsMenuActive(false);
                                    setAnimetionSetter(true);
                                }, 600);
                            }}
                            alt="Close"
                        />
                        <div className='flex flex-col justify-center items-center'>
                            {/* Mobile Menu Links */}
                            {headerNav.map((el) => {
                                return (
                                    <Link
                                        to={`/${el.toLowerCase()}`} // Dynamically set the path
                                        className='actv text-white text-2xl font-semibold p-5'
                                        key={el}
                                        onClick={() => {
                                            setAnimetionSetter(false);
                                            setTimeout(() => {
                                                setIsMenuActive(false);
                                                setAnimetionSetter(true);
                                            }, 600);
                                        }}
                                    >
                                        {el}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <Link to='/' ><img src={logo} className='h-[60px] sm:h-[80px] text-white' alt="Logo" onClick={()=>{}} /></Link>

                {/* Desktop Navigation */}
                <div className='hidden sm:flex border-t-2 border-b-2 justify-center items-center gap-15 px-4 border-white mr-25 navMenu'>
                    {headerNav.map((el) => {
                        return (
                            <Link
                                to={`/${el.toLowerCase()}`} // Dynamically set the path
                                className='actv text-lg text-white p-2'
                                key={el}
                            >
                                {el}
                            </Link>
                        );
                    })}
                </div>

                {/* Cart Icon with Cart Length */}
                <Link to='/cart' className='flex gap-1 items-center border-none relative'>
                    <img className='h-[25px]' src={cartIcon} alt="Cart" />
                    <div className='h-[15px] w-[15px] rounded-full bg-white absolute right-[-30%] top-[-30%]'>
                        <p className='text-xs text-black text-center'>{cart.length}</p>
                </div>
                    </Link>
            </div>
        </div>
    );
};

export default Header;
