//THIS IS THE BANNER SECTION:-

import React from 'react'
import { motion } from 'framer-motion'
import { SlideUp } from '../../Utility/animation'

const Banner = ({ image, title, subtitle, link }) => {
    return (
        <div className='container mb-10'>
            <div className=" bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-140">

                {/**Banner Image Section:- */}
                <div className='flex justify-center md:justify-start'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        src={image}
                        alt="Banner_img"
                        className='w-[300px] md:max-w-[400px] xl:max-w-[600px] object-cover' />
                </div>

                {/**Banner Text Section:- */}
                <div className='flex flex-col justify-center text-center md:text-left space-y-4 md:max-w-[500px]'>
                    {/**Here's for the title section:- */}
                    <motion.p
                        variants={SlideUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className='text-2xl lg:text-4xl font-bold capitalize font-playfair mb-4'>{title}
                    </motion.p>

                    {/**Here's for the sub-title section:- */}
                    <motion.p
                        variants={SlideUp(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className='font-playfair mb-4 text-gray-500 '>{subtitle}
                    </motion.p>

                    {/** An action button will be with the text section:- */}
                    <div className='flex justify-center md:justify-start'>
                        <button className='primary-btn'>Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner