import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import image from '../assets/aboutimg.png';
import { FaHome } from 'react-icons/fa';
import { LiaCitySolid } from 'react-icons/lia';
import { IoCall } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

const ContactComp = () => {
    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get("user_name");
        const email = formData.get("user_email");
        const message = formData.get("message");

        try {
            const result = await emailjs.send(
                'service_dpbmkqo',
                'template_rs4v6mm',
                {
                    to_name: 'NubitSoft Company',
                    from_name: name,
                    message: message,
                    from_email: email,
                    reply_to: email,
                },
                'ZWcR2BVxbB-neoaUD'
            );

            console.log('Email sent:', result.text);
            toast.success('Email sent successfully!');
            e.target.reset();
        } catch (error) {
            console.error('Failed:', error.text);
            toast.error('Failed to send message.');
        }
    };

    return (
        <div className="bg-[#1A325E] w-full py-16 text-white">
            <ToastContainer />
            <div className="mt-[18vh] w-full">
                <div className="w-full flex flex-col items-center mb-8">
                    <div
                        className="w-full h-[25vh] lg:h-[40vh] bg-fixed bg-center bg-cover"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>

                    <button className="bg-[#727D9C] text-white w-[35%] md:w-[15%] px-6 py-4 rounded-full shadow-lg font-medium text-lg -mt-6">
                        Contact US
                    </button>
                </div>

                <div className="h-auto flex flex-col lg:flex-row items-center  gap-10">
                    <div className="h-full w-full lg:w-1/2 flex justify-center">
                        <form
                            onSubmit={sendEmail}
                            className="w-full max-w-md bg-[#a9a9b9] p-8 rounded-xl shadow-2xl space-y-6 text-black"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="John Doe"
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A325E]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="you@example.com"
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A325E]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Type your message here..."
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A325E]"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#1A325E] text-white py-3 rounded-lg hover:bg-[#26487f] transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center lg:items-start  px-5 lg:w-1/2">
                        <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-snug mb-4">
                            Innovation in <br /> Every Trade
                        </h2>
                        <p className="text-white text-xl md:text-lg leading-relaxed mt-3">
                            We’d love to hear from you! Whether you have a question, feedback, or just want to learn
                            more about HedgePlay, feel free to reach out. Our team is always here to help and guide
                            you on your trading journey. Let’s connect and take the next step together
                        </p>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 space-y-4 items-center  mt-6'>
                            <div className=' flex  '>
                                <span className='bg-[#727D9C] text-[#1A325E] h-20  p-5 rounded-full text-4xl flex items-center'>
                                    <FaHome />
                                </span>
                                <span className='flex flex-col ml-2 '>
                                    <h1 className='font-bold text-2xl'>Address</h1>
                                    <h1 className=''>Nubit Software (Pvt.) Ltd
                                        Suite # 208-209, 2nd Floor
                                        New PSX Building, Stock Exchange Road</h1>
                                </span>
                            </div>
                            <div className=' flex  '>
                                <span className='bg-[#727D9C] text-[#1A325E] h-20  p-5 rounded-full text-4xl flex items-center'>
                                <LiaCitySolid />
                                </span>
                                <span className='flex flex-col ml-2 '>
                                    <h1 className='font-bold text-2xl'>City</h1>
                                    <h1 className=''>Tower,Karachi</h1>
                                </span>
                            </div>
                            <div className=' flex  '>
                                <span className='bg-[#727D9C] text-[#1A325E] h-20  p-5 rounded-full text-4xl flex items-center'>
                                <IoCall />
                                </span>
                                <span className='flex flex-col ml-2 '>
                                    <h1 className='font-bold text-2xl'>Call Us</h1>
                                    <h1 className=''>+92(21) 32428196-98</h1>
                                </span>
                            </div>
                            <div className=' flex  '>
                                <span className='bg-[#727D9C] text-[#1A325E] h-20  p-5 rounded-full text-4xl flex items-center'>
                                <MdOutlineEmail />
                                </span>
                                <span className='flex flex-col ml-2 '>
                                    <h1 className='font-bold text-2xl'>Email</h1>
                                    <h1 className=''>info@nubitsoft.com</h1>
                                </span>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComp;
