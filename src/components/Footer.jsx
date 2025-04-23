import React from 'react'
import logo from '../assets/hedgelogo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer class="bg-gray-900 pt-12 pb-6 px-10 tracking-wide">
            <div class="max-w-screen-xl mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="lg:flex lg:items-center">
                        <Link to="https://trade-hub.com.pk/">
                            <img src={logo} alt="logo" class="w-36" />
                        </Link>
                    </div>

                    <div class="lg:flex flex-col lg:items-center">
                        <h4 class="text-am mb-6 text-white">Social Media</h4>
                        <ul class="flex  space-x-4">
                            <li>
                                <Link to="https://www.facebook.com/Nubitsoftware">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                            d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                                            clip-rule="evenodd" />
                                    </svg>

                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/company/nubit-software-pvt-ltd/posts/?feedView=all">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                            d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-300 hover:fill-white w-7 h-7" id="github" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"></path>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-am mb-6 text-white">Useful links</h4>
                        <ul class="space-y-4 pl-2">
                            <li>
                                <Link to="" class="text-gray-400 hover:text-white text-sm">Home</Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Contact</Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Articles</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-am mb-6 text-white">Information</h4>
                        <ul class="space-y-4 pl-2">
                            <li>
                                <Link to="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">About Us</Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Terms &amp; Conditions</Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
                            </li>


                        </ul>
                    </div>
                </div>

                <p class="text-gray-400 text-sm mt-10">© HEDGEPLAY. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer