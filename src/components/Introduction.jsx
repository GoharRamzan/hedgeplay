import React from 'react'
import image from '../assets/intro.png'
import '../styles/style.css'
const Introduction = () => {
    return (
        <div className='bg-[#a9a9b9] h-full flex flex-col items-center w-full overflow-hidden'>
            <h1 className='bg-[#1C52CB] text-white font-bold h-12 mb-10   px-4 text-2xl flex items-center justify-center mt-7 rounded-3xl'>INTRODUCTION</h1>
            <div className='flex justify-between items-center w-full h-full'>
                <div className='w-full md:w-[50%]  flex justify-center items-center text-lg'>
                    <p className='w-[70%] text-lg md:text-2xl'>
                    Welcome to HedgePlay a cutting-edge Hedging advanced algorithm platform designed for serious traders. Whether you're Assest managing, or automating your strategies, HedgePlay offers a powerful, seamless experience. Built for speed, precision, and performance.
                    Already working with 1 Billion Daily Traders. Accuracy 80% - 90%
                    </p>
                </div>
                <div className='hidden md:block w-[50%]  h-full overflow-hidden'>
                    <img src={image} alt="" className=" h-full w-full object-fill object clip-diagonal" />
                </div>
            </div>
        </div>
    )
}

export default Introduction