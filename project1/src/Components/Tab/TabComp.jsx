import React, { useState } from 'react'
import { ProductData } from '../../mockData/data';
import { motion } from 'framer-motion';

const TabComp = () => {
    //For managing the tab state data's:-
    const [activeTab, setActiveTab] = useState("All");

    //The tabs of the website(CATAGORIES), (acc. to catagories changes happens by 'activetab' state:-)
    const tabs = ["All", "Yoga", "Fitness", "Muscles"];

    //Now for filtering the card's accc. to the catagory will change the card details:-
    const filteredCards = activeTab === "All" ? ProductData : ProductData.filter((card) => card.catagory === activeTab);
    return (
        <>
            <div className="container my-12 md:my-16">
                {/**Tabs button section:- */}
                <div className="flex space-x-4 mb-4 p-6 hover:">
                    {/**Going to make the tabs elements as buttons through map method for making these indivisual:- */}
                    {
                        tabs.map((tab) => (
                            <button className={`py-2 px-4 rounded-md duration-200 ${activeTab === tab ? 'bg-primary text-white' :
                                "bg-gray-200 text-gray-700"}`} key={tab}
                                onClick={() => setActiveTab(tab)}>{tab}</button>
                        ))
                    }
                </div>

                {/* Tabs Card section wheather it gonna filtered out or not filters(FOR FILTER CARDS):- */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5'>
                    {filteredCards.map((card) => (

                        <motion.div className='p-4 border rounded-xl shadow-sm border-[#rgba(42, 42, 42, 0.991)] 
                            cursor-pointer space-y-2 hover:border-y-black border-r-4 duration-200 font-playfair 
                            hover:font-semibold'
                            id={card.id}
                            key={card.id}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <img src={card.image} alt="card_images" className='mb-6' />
                            <p className='text-base font-semibold'>{card.catagory}</p>
                            <p className='text-gray-500'>{card.info}</p>

                        </motion.div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default TabComp
