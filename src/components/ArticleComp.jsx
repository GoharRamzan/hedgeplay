import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import image from '../assets/aboutimg.png';
import article1 from '../assets/article1.jpg'
import article2 from '../assets/article2.jpg'
import article3 from '../assets/article3.webp'
import article4 from '../assets/article4.png'
const AricleComp = () => {

    const hedgePlayArticles = [
        {
            id: 1,
            title: "Redefining Hedging with Algorithmic Intelligence",
            summary:
                "Explore how HedgePlay leverages cutting-edge algorithms to revolutionize hedging strategies. Learn how AI-driven insights, real-time data analysis, and automation empower traders to make smarter, faster, and more accurate decisions — minimizing risks while maximizing returns.",
            image: article1,
        },
        {
            id: 2,
            title: "Automation Meets Precision: Strategy Execution with HedgePlay",
            summary:
                "Manual trading is a thing of the past. Discover how HedgePlay automates complex trading strategies, ensuring flawless execution with up to 90% accuracy. From setting triggers to real-time rebalancing, see how traders gain an edge without lifting a finger.",
            image: article2,
        },
        {
            id: 3,
            title: "Scalability and Performance for the 1 Billion+ Daily Traders",
            summary:
                "Built to handle massive trade volumes, HedgePlay is already supporting over a billion trades daily. Dive into the architecture and infrastructure that allows HedgePlay to perform at scale — delivering consistent speed and reliability in high-pressure environments.",
            image: article3,
        },
        {
            id: 4,
            title: "The Future of Digital Asset Management Starts Here",
            summary:
                "More than a tool, HedgePlay is a digital asset partner. Learn how institutional and individual traders alike use it for portfolio management, strategic asset reallocation, and hedge fund optimization — all from a single seamless platform.",
            image: article4,
        },
    ];


    return (
        <div className="bg-[#1A325E] w-full py-16 text-white">

            <div className="mt-[18vh] w-full">
                <div className="w-full flex flex-col items-center mb-8">
                    <div
                        className="w-full h-[25vh] lg:h-[40vh] bg-fixed bg-center bg-cover"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>

                    <button className="bg-[#727D9C] text-white w-[35%] md:w-[15%] px-6 py-4 rounded-full shadow-lg font-medium text-lg -mt-6">
                        Articles
                    </button>
                </div>
                <div className='hidden lg:block'>
                    <div className="h-auto flex flex-col lg:flex-row items-center  gap-10 " >
                        <div className='w-1/2'>
                            <img src={article1} alt="" className='w-full object-cover' />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <h1 className='text-2xl font-bold'>Redefining Hedging with Algorithmic Intelligence</h1>
                            <h2 className='text-xl font-bold '>Summary: <br /> <span className='font-normal text-lg'>Explore how HedgePlay leverages cutting-edge algorithms to revolutionize hedging strategies. Learn how AI-driven insights, real-time data analysis, and automation empower traders to make smarter, faster, and more accurate decisions — minimizing risks while maximizing returns.
                            </span></h2>
                        </div>
                    </div>
                    <div className="h-auto flex flex-col lg:flex-row items-center  gap-10 " >

                        <div className='flex flex-col w-1/2 px-8'>
                            <h1 className='text-2xl font-bold'>Automation Meets Precision: Strategy Execution with HedgePlay</h1>
                            <h2 className='text-xl font-bold '>Summary: <br /> <span className='font-normal text-lg'>Manual trading is a thing of the past. Discover how HedgePlay
                                automates complex trading strategies, ensuring flawless execution with up to 90% accuracy.
                                From setting triggers to real-time rebalancing, see how traders gain an edge without lifting a finger.
                            </span></h2>
                        </div>
                        <div className='w-1/2'>
                            <img src={article2} alt="" className='w-full object-cover' />
                        </div>
                    </div>
                    <div className="h-auto flex flex-col lg:flex-row items-center  gap-10 " >
                        <div className='w-1/2'>
                            <img src={article3} alt="" className='w-full object-cover' />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <h1 className='text-2xl font-bold'>Scalability and Performance for the 1 Billion+ Daily Trader</h1>
                            <h2 className='text-xl font-bold '>Summary: <br /> <span className='font-normal text-lg'>Built to handle massive trade volumes, HedgePlay is already supporting over a billion trades daily. Dive into the architecture and infrastructure that allows HedgePlay to perform at scale — delivering consistent speed and reliability in high-pressure environments.
                            </span></h2>
                        </div>
                    </div>
                    <div className="h-auto flex flex-col lg:flex-row items-center  gap-10 " >
                        <div className='flex flex-col w-1/2 px-8'>
                            <h1 className='text-2xl font-bold'>The Future of Digital Asset Management Starts Here</h1>
                            <h2 className='text-xl font-bold '>Summary: <br /> <span className='font-normal text-lg'>More than a tool, HedgePlay is a digital asset partner. Learn how institutional and individual traders alike use it for portfolio management, strategic asset reallocation, and hedge fund optimization — all from a single seamless platform.
                            </span></h2>
                        </div>
                        <div className='w-1/2'>
                            <img src={article4} alt="" className='w-full object-cover' />
                        </div>
                    </div>
                </div>
                {hedgePlayArticles.map((article)=>(
                    <div className=" lg:hidden h-auto flex flex-col lg:flex-row items-center  gap-10 " key={article.id}>
                        <div className='w-full'>
                            <img src={article.image} alt="" className='w-full object-cover' />
                        </div>
                        <div className='flex flex-col w-full p-3'>
                            <h1 className='text-2xl font-bold'>{article.title}</h1>
                            <h2 className='text-xl font-bold '>Summary: <br /> <span className='font-normal text-lg'>{article.summary}
                            </span></h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AricleComp;
