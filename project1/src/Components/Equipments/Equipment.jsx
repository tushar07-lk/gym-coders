import React from 'react'
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { motion } from 'framer-motion';
import { delay } from 'framer-motion';
import { SlideLeft } from '../../Utility/animation';

//Component equipment data for 'Hero-2' section:-
const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader readable.It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
    link: "/",
    icon: <FaDumbbell />,
    delay: 0.5,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.3,
    link: "/",
  },
];

//For retriving data's to the 'Equipment' component:-
const Equipment = () => {
  return (
    <>

      <div className="container py-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className='space-y-4 p-6'>
            <h1 className='text-3xl md:text-4xl font-bold'>What We Offer For You</h1>
            <p className='text-gray-500'>It is a long established fact that a reader readable.
              It is a long established fact that a reader readable.</p>
          </div>

          {/** Now retriving data's from above what we given---> */}
          {EquipmentData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView="visible"
                className='space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl 
                              hover:shadow-[0_0_22px_0_rgba(0,0,0,0.12)] duration-150 hover:cursor-pointer'>
                <div className='font-bold text-4xl'>{item.icon}</div>
                <p className='text-2xl font-semibold'>{item.title}</p>
                <p className='text-gray-500'>{item.desc}</p>
              </motion.div>
            )
          })
          }
        </div>
      </div>

    </>
  )
}

export default Equipment
