import React from 'react'
import { FaDumbbell } from 'react-icons/fa'
// For Icons:
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {

    // Get the current year according to the year changes automatically:-
    const CurrentYear = new Date().getFullYear();

    return (

        <div className='bg-gradient-to-r from-gray-900 to-gray-950 dark:bg-black rounded-t-3xl'>
            <div className='container'>

                {/* brand info */}
                <div className='grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10'>

                    {/* For handling the comapny name:- */}
                    <div className='py-8 px-4 space-y-4'>
                        <div className='text-2xl flex items-center gap-2 uppercase font-bold font-sans text-white'>
                            <FaDumbbell />
                            <p>Coders</p>
                            <p className='text-secondary'>Gym</p>
                        </div>

                        {/* Brand about */}
                        <p className='text-white text-[14px] flex items-start'>
                            504-505, Morya Estate Commercial PRM LTD, Oshiwara Link Road, Andheri West,
                            Mumbai Suburban, Maharashtra, 410065
                        </p>

                        {/* Icon's Section of any of the company:- */}
                        <div className='flex items-center justify-start gap-5 !mt-6'>
                            <a href="#">
                                <FaLocationDot className='text-3xl text-white hover:text-gray-400' />
                            </a>
                            <a href="#">
                                <FaInstagram className='text-3xl text-white hover:text-gray-400' />
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl text-white hover:text-gray-400' />
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl text-white hover:text-gray-400' />
                            </a>
                        </div>

                    </div>

                    {/* Footer Links Section */}
                    <div className='grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14'>
                        {/* Three Section's for footer links: */}

                        <div className='py-8 px-4 text-white font-sans text-base sm:text-left text-justify mb-5'>
                            <h1 className='uppercase sm:text-xl font-bold text-gray-300 mb-4'>Learn & get help</h1>
                            {/* Listed Items: */}
                            <ul className='flex flex-col gap-3 text-gray-400'>

                                <li>
                                    <a href="#" className='hover:text-white'>Try Us</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Support</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Blog</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Ebooks</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Forum</a>
                                </li>

                            </ul>
                        </div>

                        {/* Second Footer Section */}
                        <div className='py-8 px-4 text-white font-sans text-base sm:text-left text-justify mb-5'>
                            <h1 className='uppercase sm:text-xl font-bold text-gray-300 mb-4'>Company</h1>
                            {/* Listed Items: */}
                            <ul className='flex flex-col gap-3 text-gray-400'>

                                <li>
                                    <a href="#" className='hover:text-white'>About</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Careers</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Sitemap</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Wishlist</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Become an Affiliate</a>
                                </li>

                            </ul>
                        </div>
                        {/* Third Footer Section */}
                        <div className='py-8 px-4 text-white font-sans text-base sm:text-left text-justify mb-5'>
                            <h1 className='uppercase sm:text-xl font-bold text-gray-300 mb-4'>Terms & policy</h1>
                            {/* Listed Items: */}
                            <ul className='flex flex-col gap-3 text-gray-400'>

                                <li>
                                    <a href="#" className='hover:text-white'>Terms Of Service</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Cookie Policy</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Hire Designers</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-white'>Cookie Preferences</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

                {/* Copyright Section: */}
                <div className='text-center py-6 border-t-2 border-gray-300/10'>
                    <span className='text-sm md:text-[16px] text-white opacity-70'>&copy; {CurrentYear} All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer