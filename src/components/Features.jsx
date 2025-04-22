import React from 'react'

const Features = () => {
    return (
        <div className='bg-[#1A325E] h-full flex flex-col items-center w-full overflow-hidden'>
            <h1 className='bg-[#1C52CB] text-white font-bold h-12 mb-10   px-10 text-2xl flex items-center justify-center mt-7 rounded-3xl'>FEATURES</h1>
            <div className='flex justify-between items-center w-[80%] h-full bg-[#a9a9b9] rounded-3xl py-9 px-11'>
                <ul className='list-disc text-xl md:text-2xl leading-10 w-full'>
                    <li>Advanced Algorithm.</li>
                    <li>Smart decisions making.</li>
                    <li>Multiple account trading for managing diversified portfolios.</li>
                    <li>One-Screen View for Multiple Accounts and Markets.</li>
                    <li>Real time watching symbol spread & difference.</li>
                    <li>Order Control by Volume & Value.</li>
                    <li>Auto cancel.</li>
                    <li>Re-Allocation trades.</li>
                    <li>Mobile application for live tracking of investments and performance.</li>
                </ul>

            </div>
        </div>
    )
}

export default Features