import React from 'react'

const HelpCenter = () => {
    return (
        <>
            <div className='bg-black text-white pt-50 px-2 sm:px-[20%] ' >

                <h1 className='text-center font-semibold text-3xl sm:text-5xl mb-5 text-[#e6c7eb] ' >HELP CENTER</h1>
                <p className='text-center font-semibold ' >You've Got Questions. We've Got Answers</p>

                {/* questions and answer */}
                <div className='mt-10' >
                    <h1 className=' text-2xl font-semibold mb-3 ' >WHAT ARE THE PAYMENT OPTIONS?</h1>
                    <p className=' font-bold sm:font-semibold ' >

                        Multiple Payment options are available at The Anime Factory. We Suggest our customers for online Transactions like UPI, Debit Card/Credit Card Payment but apart from that we also have Cash on Delivery.</p>
                </div>


                <div className='mt-10' >
                    <h1 className=' text-2xl font-semibold mb-3 ' >WHAT IS THE DELIVERY CHARGE?</h1>
                    <p className=' font-bold sm:font-semibold ' >

                        All order placed on our platform shall not be inclusive of additional delivery charge. However the delivery charges shall be provided on your final invoice that will be generated. <br />

                        If the delivery is incomplete or the delivery has not been undertaken, then the User may raise a complaint on our Customer support email Id provided on the Terms of Service and Privacy Policy. We may investigate into the issue and then proceed with a refund at the earliest in case of a discrepancy in providing services to you.
                    </p>
                </div>


                <div className='mt-10' >
                    <h1 className=' text-2xl font-semibold mb-3 ' >WHAT IS YOUR RETURN POLICY?</h1>
                    <p className=' font-bold sm:font-semibold ' >
                        As a general rule, for all the purchases made on the platform by the User shall be entitled to a refund only if it falls any of the below categories.
                        <ol className='ml-5' type='1' style={{ listStyleType: 'decimal' }} >
                            <li>If the product is damaged during the transit or due to the negligence on behalf of the company or the Service Provider.</li>
                            <li>If there has been a delivery of the wrong product to the customer.</li>
                            <li>If there has been a defect in colour, design or the product is worn out.</li>
                        </ol>
                        The refund request will only be entertained if the Service provider of the Company selling the goods/products has defaulted beyond the reasonable doubt. In such cases, the refunds are done within 7 business days from the date of the user raising the request and the Company has acknowledged the same. <br />

                        All Refunds shall be made only on the basis and upon investigation by the Company’s Customer care on following such guidelines. <br />

                        NOTE: All requests for the refund will be entertained only at the discretion of the Company and the platform. Further, there will be a strict due diligence conducted on the product post receiving it.

                    </p>

                </div>

            </div>



        </>
    )
}

export default HelpCenter