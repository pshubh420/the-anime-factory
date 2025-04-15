import React, { useEffect, useRef } from 'react'
import heroImage2 from '../home page/hero-we-are-live.avif'
import hero_video from "/vid_opt.mp4"
import vid_poster from '/vid-poster.avif'
import memLook from '../home page/mamber_look.avif'
import jjkImage from '../home page/Jujutsu_Kaisen.avif'
import TempSlider from '../components/TempSlider'
import newLook from "../home page/newlook.avif"
import newLook2 from "../home page/newlook-2.avif"
import wihteLogo from '/white_logo.avif'
import newArrival1 from '../home page/new-drop-1.avif'
import newArrival from '../home page/new-drop.avif'
import newyYear from '../home page/newyYear.avif'
import parcel_guy from '../home page/delivery-guy.avif'
import deliveryGuy2 from "../home page/delivery-guy-2.avif"
import ourStoryBG from '../home page/ourstorybg.avif'
import itachiBG from '../home page/our-story.avif'
import { motion } from 'motion/react'
import { animate, spring } from 'motion'
import AnimationTextHome from '../components/AnimationTextHome'
import ReviewSection from '../components/ReviewSection'
import { preload } from 'react-dom'
import { Link } from 'react-router-dom'
import { link } from 'motion/react-client'


const HomePage = () => {
    let homePageSlider = true
    let isMobileView = window.screen.width < 420

    const videoRef = useRef()
    const MotionLink = motion(Link)




    return (
        <>
        <div className='sm:h-[100px] bg-black ' ></div>
            <div className='bg-black w-full' >
                <video className='w-full max-h-[100vh] object-cover m-auto pt-30 sm:pt-0 ' preload='auto' ref={videoRef} playsInline autoPlay loop poster={vid_poster} >
                    <source src={hero_video} type='video/mp4' />
                </video>


                <div className='mt-10  relative overflow-hidden' >
                    <img src={heroImage2} className=' w-full h-full ' alt="heroImage" />
                </div>

                {/* FEFEATURED SECTION */}
                <AnimationTextHome secondImage={jjkImage} firstImage={memLook} text="Featured" type="feature" />

                {/* SLIDER SECTION */}
                <div className='bg-white overflow-hidden ' >

                    <TempSlider homePageSlider={homePageSlider} />
                </div>
                {/* TRENDING SECTION             */}
                
                <AnimationTextHome secondImage={newLook2} firstImage={newLook} text="Trending" type="trending" />
                  
                {/* best anime merch in town */}
                <div className='bg-white w-full p-5 hidden sm:block ' >
                    <h2 className='text-6xl text-center ' >Best Anime Merch in the town.</h2>
                    <div className='flex gap-2 justify-between items-center w-[70%] m-auto ' >
                        <div className='  ' >
                            <img className='' src={wihteLogo} alt="whiteLogo" />
                        </div>

                        <div className='h-70  border-2 border-black ' ></div>

                        <div className='w-[45%]' >
                            <p>We carry a large variety of Anime Merch like Naruto, Demon Slayer & Dragon Ball Z to meet every price point. Have a look at our products below and start dreaming about that perfect addition to your closet.

                                At The Anime Factory, we love anime. We know you do too. That's why we're dedicated to helping you find the best gear for the fandom in your life. Whether it's a new Naruto Hoodie or a Demon Slayer Tshirt, we've got something for everyone—and we always have in-stock!</p>

                            <button className=' mt-5 text-white text-xl p-3 bg-pink-600 border-none' > Shop Now</button>
                        </div>

                    </div>

                </div>

                {/* New Drop Section */}

                <AnimationTextHome secondImage={newArrival} firstImage={newArrival1} text="New Drop" type="newDrop" />

                {/* new year super sale */}

                <div className='sm:h-[30vw] bg-white ' >
                    <img src={newyYear} className=' m-auto h-full bg-white object-cover' alt="newYear" />
                </div>

                {/* get order */}

                <div className={`w-full min-h-[60vh]  sm:h-[90vh]  relative`}   >
                    <img className=' bottom-0 z-10 sm:h-full absolute  sm:left-[35%]  object-fit ' src={parcel_guy}  alt='parcelGuy' />


                    <motion.h2 className=' text-4xl p-5 top-0 sm:p-0 text-center sm:text-8xl sm:top-30 sm:left-[15%] absolute  text-white z-0'
                    initial={{
                        opacity:0,
                        scale:0.7
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.8,
                        delay:0.1
                    }}
                    viewport={{once : true}}
                     > Get your order in 7 Days </motion.h2>
                </div>


                {/* pay COD */}

                <div className='bg-white h-[70vh] relative sm:pt-15 overflow-hidden  ' >
                    <motion.h2 className='text-4xl font-bold py-5 text-center sm:text-7xl sm:absolute sm:left-[30%] top-0 '
                    
                    initial={{
                        opacity:0,
                        scale:0.7
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.8,
                        delay:0.1
                    }}
                    viewport={{once : true}}

                    > Pay Cash On Delivery 
                    </motion.h2>
                    <div className='sm:flex justify-center items-center  ' >

                        <motion.div className=' h-full sm:w-[28%] origin-bottom-left absolute sm:static top-45 ' 
                         initial={{
                            rotate : -45,
                            opacity : 0
                        }}
                        whileInView={{
                            rotate : 0,
                            opacity : 1
                        }}
                        transition={{
                            duration : 0.5,
                            default : {type : spring}
                        }}
                        viewport={{once : true}}
                        >
                            <img src={deliveryGuy2} className='object-cover  ' alt="deliveryGuy2" />
                        </motion.div>
                        <div className='  px-10  text-lg  sm:p-0 sm:w-[30%] ' style={{wordSpacing : '5px'}} >
                            <motion.div className='font-bold'
                            initial={{
                                opacity:0,
                                scale: 0.8
                            }}
                            whileInView={{
                                opacity:1,
                                scale : 1
                            }}
                            transition={{
                                duration : 0.5
                            }}
                            viewport={{once : true}}
                            >
                               <p> Don't want to enter your card details online? COD is the perfect solution. Pay in cash at the time of delivery.</p> <br /> 
                               <p className='hidden sm:block' > Say goodbye to the hassle of entering card details online. With COD, you can pay for your order in cash when it arrives at your doorstep. </p> <br /> 
                               <p className='hidden sm:block' > Experience the convenience of online shopping with the security of paying in cash. Choose COD at checkout.</p>
                            </motion.div>
                        </div>

                    </div>

                </div>

                {/* our story */}
                <div style={{ backgroundImage: `url(${ourStoryBG})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'inherit' }} className='relative h-[130vh] sm:h-[156vh] overflow-hidden '  >

                    <div className=' flex flex-col justify-center items-center gap-5 ' >
                        <h2 className='text-center text-4xl text-[#E6C7EB] font-bold mt-5 ' >OUR STORY</h2>
                        <p className='text-center text-xl ' >Be Aesthetic</p>

                        <div className=' w-full p-5  sm:w-[55%] overflow-hidden ' style={{wordSpacing : '10px'}}
                        
                        > 
                        <motion.p className='text-[#E6C7EB] font-medium w-full leading-7  '
                        
                           initial={{
                                y: isMobileView? 100 : 0 ,
                                opacity : isMobileView ? 0 : 1
                            }}
                            whileInView={{
                                y:0,
                                opacity:1
                            }}
                            opacity={{
                                duration :  0.8
                            }} 
                            viewport={{once : true}}

                        > 
                         We're the Anime Factory. Our clothes are made for the hardcore anime fan who appreciates quality and style, and we're always looking for ways to make our products more awesome. Whether you're looking for something that combines your love of anime with your passion for fashion, or if you're just looking for new ways to express yourself through anime-themed clothes, we've got you covered!. That's right, we make clothes that are inspired by your favorite anime shows!
                            <br />
                            Our designs are unique, thoughtful, and made with the highest quality materials available. You'll find only the best in our products—and we're constantly bringing new ones to the market.

                            If you love anime as much as we do, you'll want to check out our store!


                        </motion.p>
                        </div>

                        <button className=' mt-5 py-2 px-5 bg-[#E6C7EB] ' >  Read More</button>

                    </div>
                    <div className='w-full absolute bottom-0  sm:top-[30%] '  >
                        <img src={itachiBG} className=' object-cover  ' alt="itachiBG" />

                    </div>

                </div>

                <div className='flex flex-col gap-8 justify-between items-center py-10 bg-white ' >

                    <motion.p className='text-3xl'
                    
                            initial={{
                                opacity : 0
                            }}
                            whileInView={{
                                opacity : 1
                            }}

                            transition={{
                                duration : 0.7
                            }}
                            viewport={{once:true}}

                    >
                        - Winter Sale -
                    </motion.p>
                    <motion.h2 className='text-6xl font-semibold '
                    
                    initial={{
                        opacity : 0,
                        scale : 0.7
                    }}
                    whileInView={{
                        opacity : 1,
                        scale : 1
                    }}

                    transition={{
                        duration : 0.7
                    }}
                    viewport={{once:true}}
                    
                    >Get 30% Off</motion.h2>
                    < MotionLink className='py-3 px-10 bg-black text-white inline-block  ' 
                    
                    initial={{
                        opacity : 0
                    }}
                    whileInView={{
                        opacity : 1
                    }}

                    transition={{
                        duration : 0.7
                    }}
                    viewport={{once:true}}
                    
                    >Shop Now</ MotionLink>

                </div>

                <ReviewSection />

            </div>

        </>
    )
}

export default HomePage