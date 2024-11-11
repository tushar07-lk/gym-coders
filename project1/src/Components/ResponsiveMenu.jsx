
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ open }) => {
    //Inside of this tag, on which section animation will perform:-
    return <AnimatePresence mode='wait'>
        {open && (
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                className='absolute top-20 left-0 w-full h-screen z-20'
            >
                <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-7 rounded-3xl cursor-pointer'>
                    <ul className='flex flex-col justify-center items-center gap-10'>
                        <li className='hover:text-black hover:font-extrabold hover:!scale-105'>Home</li>
                        <li className='hover:text-black hover:font-extrabold hover:!scale-105'>About</li>
                        <li className='hover:text-black hover:font-extrabold hover:!scale-105'>Service</li>
                        <li className='hover:text-black hover:font-extrabold hover:!scale-105'>Contact</li>
                    </ul>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
}

export default ResponsiveMenu