import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg from '../../assets/fitness-female-woman-with-muscular-body-ready-workout-grey-wall.png';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight } from '../../Utility/animation';

const Hero = () => {
    //Grid elem's how in 'sm' page, show in single line 
    //And in MD-..xl, show in 2 side cols wise..
    return (
        <>

            <section>
                <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                    {/**Brand Info:- */}
                    <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                        <div className='text-center md:text-left space-x-6'>
                            <motion.h1
                                variants={SlideLeft(0.6)}
                                initial="hidden"
                                animate="visible"
                                className='text-5xl lg:text-6xl font-bold leading-relaxed 
                                        xl:leading-normal hover:cursor-pointer'>Gym Gives you the Perfect
                                <span className='text-primary'> Health</span>

                            </motion.h1>

                            <motion.p
                                variants={SlideRight(1.2)}
                                initial="hidden"
                                animate="visible"
                                className='text-white xl:max-w-[500px]'>
                                It is a long established fact that a reader will be by readable
                                content of a page when are the best product.
                            </motion.p>

                            {/**Button Section: */}
                            <motion.div
                                variants={SlideRight(1.5)}
                                initial="hidden"
                                animate="visible"
                                className='flex justify-center gap-8 md:justify-start items-center'>
                                <button className='primary-btn flex items-center gap-2 mt-4'> Order Now</button>
                                <button className='flex justify-center gap-2 items-center mt-4 second-btn'><FaPlay /> Watch Now</button>
                            </motion.div>
                        </div>
                    </div>
                    {/**Hero Img:- */}
                    <div className='flex justify-center items-center cursor-pointer'>
                        <motion.img
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            src={HeroImg} alt="Hero_sec.png" className='hidden md:block w-[260px] md:w-[400px] xl:w-[450px] 
                                                                        drop-shadow-md shadow-btn'/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero
