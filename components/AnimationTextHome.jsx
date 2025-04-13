import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const AnimationTextHome = ({ firstImage, secondImage, text, type }) => {

    let isMobileView = false

    window.screen.width > 420 ? isMobileView = false : isMobileView = true
    let top = isMobileView ? 100 : 160

    return (
        <>

            <div className=' sm:px-[15%]' >
                <div className='pb-5 bg-black overflow-hidden ' >
                    <motion.div className='overflow-hidden transform-3d '

                    >


                        <motion.h2
                            className='text-5xl sm:text-8xl text-center sm:text-left p-5 transform-3d origin-top font-medium text-white '
                            initial={{
                                y:  top,
                                rotateX: 90,
                                rotate: 10,
                                scale: 1
                                // rotate: 30,
                            }}
                            whileInView={{
                                y: 0,
                                rotateX: 0,
                                rotate: 0,
                                scale: 1,

                                // rotate: 0,
                            }}
                            transition={{
                                duration: 0.9,
                                ease: "easeInOut"
                            }}
                            viewport={{ once: true }}

                        >
                            {text}
                        </motion.h2>

                    </motion.div>
                    <motion.div className='w-full flex flex-wrap sm:flex-nowrap gap-1  
                         '
                        initial={{
                            y: 100,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{

                            duration: 0.5,
                            delay: 0.5,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                    >
                        <div className='relative' >
                            <img src={firstImage} alt="firstImage" />
                            <Link to='/shop' className={`absolute inline-block 
                                 ${type == "feature" && ' sm:left-[45%]  left-[35%]  bg-black text-white bottom-1 '}  
                                 ${type == "trending" && ' top-[18%] left-[38%] sm:left-[41%] bg-white text-black '}  
                                 ${type == "newDrop" && ' bottom-[20%] left-[35%] sm:left-[45%] bg-white text-black  rounded-xl '}  
                                 
                                 px-5 py-2 border-1`}  >
                                Shop
                            </Link>
                        </div>
                        <div className='relative' >
                            <img src={secondImage} className='object-cover' alt="secondImage" />
                            <Link to='/shop' className={`absolute inline-block  
                                 ${type == "feature" && ' left-[35%] sm:left-[45%]   bg-white text-black bottom-1 '}  
                                 ${type == "trending" && ' top-[45%] left-[5%] sm:left-[15%]    border-1  bg-black text-white '}  
                                 ${type == "newDrop" && ' top-8 left-[35%] sm:left-[45%]  bg-white text-black '} 

                                 border-1 px-5 py-2`} >
                                Shop
                            </Link>

                            {type === "trending" && <div className='absolute left-0 bottom-10' >
                                <h2 className='text-3xl font-bold sm:text-6xl md:text-6xl ' >
                                    Get 30% Off
                                </h2>

                            </div>}

                        </div>

                    </motion.div>
                </div>
            </div>


        </>
    )
}

export default AnimationTextHome