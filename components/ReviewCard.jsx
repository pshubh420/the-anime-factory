import React from 'react'
import coma from '/coma_white.png'
import { motion } from 'motion/react'

const ReviewCard = ({name , comment}) => {
    return (
        <>

            <div className='flex flex-col justify-center items-center gap-10 w-full sm:w-[33%] px-5 py-30 bg-black ' >
                <motion.div className='flex flex-col justify-center items-center gap-10'
                
                initial={{
                    opacity:0
                }}
                whileInView={{
                    opacity:1
                }}
                transition={{
                    duration : 0.8
                }}
                viewport={{
                    once : true
                }}

                >

                <img  src={coma} alt="coma" 
                className='h-[60px]'
                />
                <h3 className='text-2xl text-white font-semibold ' >
                    {name}
                </h3>
                </motion.div>



                <motion.p className='text-white max-w-[310px]  ' 
                style={{wordSpacing : "8px"}}
                initial={{
                    y:80,
                    opacity:0
                }}
                whileInView={{
                    y:0,
                    opacity:1
                }}
                transition={{
                    duration:0.5
                }}
                viewport={{
                    once : true
                }}
                >
                {comment}
                </motion.p>

            </div>

        </>

    )
}

export default ReviewCard