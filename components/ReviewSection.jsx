import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewSection = () => {

        const data = {
            alex : {
                name : "Alex Paul, KL",
                comment : "This is definitely my favorite Naruto Merch I've ever owned. It's well-made and comfortable. The print on the Naruto Hoodie is also great! it has a nice, glossy finish."
            },
            parul : {
                name: "Parul Sharma, DL",
                comment : ` "What can we say? The Anime Factory is the best place to shop. We love their Naruto Tshirts and Demon Slayer hoodies, which are both high quality and incredibly on-trend. We also love that they have such a wide variety of styles and fits, so you can find something you love at any time of day or night."  `
            },
            kamal:{
                name : "Kamal Singh, MH",
                comment : ` “I just received my naruto tshirt in 5 days! I am incredibly happy with your quickness and the beautiful clothes. I have been looking for a shirt like this for a long time, and it  is exactly what I wanted. Thank you so much The Anime Factory!” `
            }

        }

  return (
    <>
    
    <div className='flex flex-col sm:flex-row justify-center gap-0.5 bg-white ' >
                            <ReviewCard name={data.alex.name} comment={data.alex.comment} />
                            <ReviewCard name={data.parul.name} comment={data.parul.comment} />
                            <ReviewCard  name={data.kamal.name} comment={data.kamal.comment} />

                </div>
    
    </>
  )
}

export default ReviewSection