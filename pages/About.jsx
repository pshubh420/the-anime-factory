import React from 'react'
import ourStoryBG from '../home page/ourstorybg.avif'
import clould1 from '/cloud1.avif'
import clould2 from '/cloud2.avif'
import clould3 from '/cloud3.avif'
import logo from '/logo.avif'
import itachiBg from '../home page/our-story.avif'
const About = () => {
    return (
        <>
            <div className='w-full overflow-hidden box-border' >

                <div className=' h-[70vh] sm:h-[100vh] w-[100%] flex justify-center items-center relative overflow-hidden ' style={{ backgroundImage: `url(${ourStoryBG})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'inherit' }} >
                    <img className='absolute   left-0 h-[40%] bottom-[-7%]    sm:left-15 sm:top-[10%] sm:h-[60%] z-11 ' src={clould1} alt="cloud1" />
                    <img className='absolute z-11 h-[12%] right-75 top-[18%]   sm:z-0  sm:right-35 sm:top-[40%] sm:h-[25%] ' src={clould2} alt="cloud2" />
                    <img className='absolute z-11 h-[25%] right-0 top-90    sm:right-40 sm:top-[48%] sm:h-[60%] sm:z-0 ' src={clould3} alt="cloud3" />


                    <div className=' mt-10 sm:mt-30  h-[60%] w-[90%] sm:h-[45%] sm:w-[35%] bg-black text-center sm:p-18  z-10 ' >
                        <h2 className=' mt-4 sm:mt-0 text-6xl font-semibold text-white' > About Us </h2>
                        <p className='text-md font-semibold  text-white sm:mt-5 py-12 px-5  sm:p-0 leading-7 ' > As a Clothing Brand, We create illustrations that are as vivid and alive as the scenes you can picture in your mind </p>
                        <button className='px-8 py-2 sm:mt-5 bg-[#e6c7eb] ' > Read More </button>
                    </div>

                </div>

                {/* our story */}

                <div className='bg-black w-[100%] flex flex-col justify-center items-center gap-5 py-5 text-white overflow-hidden pb-10 ' >
                    <h2 className='text-4xl font-semibold ' >OUR STORY</h2>
                    <img src={logo} alt="logo" />
                    <p className=' font-bold  sm:font-semibold w-full leading-10 text-left sm:leading-6 sm:w-[52%] sm:text-center ' >The Anime Factory is a Clothing Brand surround by the boundaries of Aesthetic Anime Artwork . We know the price and quality of our products are enough to keep people coming back, but we’re also highly committed to customer satisfaction and giving our customers a shopping experience they won’t find elsewhere. We take pride in offering our valued customers creative collections for each season. Try us on for yourself and understand why so many have made "The Anime Factory" their favorite shopping destination for buying top quality anime merchandise.</p>


                </div>

                <div className='w-[100%] sm:h-[80vh] overflow-hidden' style={{ backgroundImage: `url(${ourStoryBG})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'inherit' }} >
                    <img src={itachiBg} className='object-cover scale-135 ' alt="itachibg" />
                </div>
            </div>


        </>

    )
}

export default About