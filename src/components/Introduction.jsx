import React, { useEffect, useState } from 'react'
import image from '../assets/intro.png'
import '../styles/style.css'
import hedgemob1 from '../assets/hegemob1.png'
import hedgemob2 from '../assets/hegemob2.png'
import hedgemob3 from '../assets/hegemob3.png'
import hedgemob4 from '../assets/hegemob4.png'
const Introduction = () => {
    const images = [hedgemob1, hedgemob2, hedgemob3, hedgemob4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // start fade-out

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length); // change image
                setFade(true); // start fade-in
            }, 500); // match fade-out duration
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-[#a9a9b9] h-full flex flex-col items-center w-full overflow-hidden'>
            <h1 className='bg-[#1C52CB] text-white font-bold h-12 mb-10   px-4 text-2xl flex items-center justify-center mt-7 rounded-3xl'>INTRODUCTION</h1>
            <div className='flex flex-col md:flex-row justify-between items-center w-full h-full'>
                <div className='w-full md:w-[50%]  flex justify-center items-center text-lg pb-10 md:p-0'>
                    <p className='w-[70%] text-lg md:text-2xl'>
                        Welcome to HedgePlay a cutting-edge Hedging advanced algorithm platform designed for serious traders. Whether you're Assest managing, or automating your strategies, HedgePlay offers a powerful, seamless experience. Built for speed, precision, and performance.
                        Already working with 1 Billion Daily Traders. Accuracy 80% - 90%
                    </p>
                </div>
                <div className=" md:grid md:w-[50%] w-full grid-cols-1 justify-items-center space-x-2 py-7 h-[50vh] md:h-full  overflow-hidden">
                    <img
                        src={images[currentIndex]}
                        alt=""
                        className={`object-fill h-full  transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Introduction