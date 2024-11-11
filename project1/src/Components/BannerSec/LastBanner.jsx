import React from 'react'
import { motion } from 'framer-motion';
import { SlideLeft } from '../../Utility/animation';


const LastBanner = () => {
    return (
        <div className='container my-14'>
            {/* Grid Section */}
            <div className='bg-[#f9f9f9] py-14 md:py-24'>

                {/* Brand Info */}
                <div className='flex flex-col justify-center text-center space-y-8 lg:px-44'>
                    <motion.h1
                        variants={SlideLeft(0.5)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className='text-3xl lg:text-5xl font-bold uppercase font-serif'>Get 20% Discount On Your First Order, Are You Ready To Buy</motion.h1>
                    <motion.p
                        variants={SlideLeft(0.7)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className=''>We will make sure you get the right and the best quality products for your workout.</motion.p>

                    {/* Now two choosing buttons sections:- */}
                    <motion.div
                        variants={SlideLeft(0.9)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className='flex justify-center gap-6'>
                        <button className='primary-btn'>Learn More</button>
                        <button className='second-btn px-5 rounded-lg'>Stay In Touch</button>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default LastBanner