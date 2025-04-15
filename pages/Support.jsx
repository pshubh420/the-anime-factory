import React, { useState } from 'react'
import itachiBg from '../home page/our-story.avif'
import ourStoryBG from '../home page/ourstorybg.avif'
import downArr from '/down-white.png'

const Support = () => {

    const [issue, setIssue] = useState("")
    const [showIssueOptions, setShowIssueOptions] = useState(false)

    return (
        <>
            <div className='bg-black' >
                    <div className='h-[100px]' ></div>
                <div className='w-[100%] sm:h-[80vh] overflow-hidden  ' style={{ backgroundImage: `url(${ourStoryBG})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'inherit' }} >
                    <img src={itachiBg} className='object-cover scale-135 ' alt="itachiBG" />
                </div>

                <h2 className='font-semibold text-3xl sm:text-5xl text-[#e6c7eb] my-10 text-center ' > CONTACT SUPPORT </h2>

                    {/* uncontrolled form as nothing is being passed to the server */}

                <form action="submit" onClick={(e) => { e.preventDefault(); console.log('submit') }} className=' relative p-5 sm:w-[60%] m-auto pb-40'   >
                    <p className='font-semibold text-white text-center mb-5 sm:mb-2 ' >How Can We Help</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2' >
                        <input type="text" placeholder='First Name' className='border-1 border-white text-white p-3 placeholder-opacity-100 placeholder-white font-semibold ' required />
                        <input type="text" placeholder='Last Name' className='border-1 border-white text-white p-3 placeholder-opacity-100 placeholder-white font-semibold ' required />
                        <input type="text" placeholder='Email' className='border-1 border-white text-white p-3 placeholder-opacity-100 placeholder-white font-semibold ' required />
                        <input type="text" placeholder='Phone' className='border-1 border-white text-white p-3 placeholder-opacity-100 placeholder-white font-semibold ' required />
                        <div className='relative flex justify-between items-center border-1 border-white text-white font-semibold  sm:col-span-2 p-3'
                            onClick={() => { setShowIssueOptions(!showIssueOptions) }}
                        >
                            <p className='text-white' >{issue === "" ? 'Choose Your Issue' : issue}</p>
                            <img src={downArr} className='h-5' alt="downArrow" />
                            <div className={`${showIssueOptions ? 'block' : 'hidden'}  absolute w-full bg-white left-0 top-[102%] text-black`}  >
                                <p onClick={(e) => { setIssue(e.target.innerText); setShowIssueOptions(false) }} className='p-2' >Logging Into Acocunt</p>
                                <p onClick={(e) => { setIssue(e.target.innerText); setShowIssueOptions(false) }} className='p-2' >Completing Payment</p>
                                <p onClick={(e) => { setIssue(e.target.innerText); setShowIssueOptions(false) }} className='p-2' >viewing content</p>
                                <p onClick={(e) => { setIssue(e.target.innerText); setShowIssueOptions(false) }} className='p-2' >Uploading Files</p>
                                <p onClick={(e) => { setIssue(e.target.innerText); setShowIssueOptions(false) }} className='p-2' >other</p>

                            </div>
                        </div>
                        <textarea type="text" placeholder='Let us know what yhou need help with...' className='border-1 h-[150px] resize-none border-white text-white p-3 placeholder-opacity-100 placeholder-white font-semibold sm:col-span-2 ' required />
                        <button className='sm:absolute bottom-30 left-[35%] px-20 py-7 font-semibold bg-white text-black ' > Get in Touch </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Support