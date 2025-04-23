import React from 'react';
import logo from '../assets/hedgelogo.png'; // adjust this if your image is different
import image from '../assets/aboutimg.png'
import about2 from '../assets/about2.png'
const AboutComp = () => {
    return (
        <div className="bg-[#1A325E] w-full py-16 text-white">
            {/* About Us Pill Button */}
            <div className="mt-[18vh] w-full">
                <div className="w-full flex flex-col items-center mb-8">
                    {/* Parallax Background */}
                    <div
                        className="w-full h-[25vh] md:h-[40vh] bg-fixed bg-center bg-cover"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>

                    <button className="bg-[#727D9C] text-white w-[35%] md:w-[15%] px-6 py-4 rounded-full shadow-lg font-medium text-lg -mt-6">
                        About Us
                    </button>
                </div>

                {/* Main Section */}
                <div className="h-[85vh] flex flex-col lg:flex-row items-center gap-10">
                    {/* Image Section */}
                    <div className="hidden  relative h-full w-full lg:w-1/2 md:flex justify-center left-14">


                        <div className='absolute h-2/3 w-[80%]  left-4  z-0'>
                            <img src={about2} alt="the image is loading..... " className="w-full  object-contain" />
                        </div>

                        <div className="absolute  bg-[#1A325E] top-12 left-20  p-4 w-[80%] z-10  "
                            style={{
                                boxShadow: '-20px -20px 10px rgb(216, 216, 214)',
                                backgroundColor: '#1A325E',
                                borderRadius: '1rem',
                                padding: '1rem',
                                width: '80%',
                            }}>
                            <img src={logo} alt="HedgePlay" className=" p-25 w-full  object-contain" />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-snug mb-4">
                            Innovation in <br /> Every Trade
                        </h2>
                        <p className="text-white text-base md:text-lg leading-relaxed">
                            HedgePlay is developed by Nubit Software (Pvt.) Ltd, a company dedicated to reshaping the digital trading experience.
                            We specialize in building reliable, scalable, and secure platforms for traders of all levels.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutComp;
