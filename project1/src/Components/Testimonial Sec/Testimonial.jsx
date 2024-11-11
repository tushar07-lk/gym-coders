//TESTIMONIALS SECTION:-

import React from 'react';
import { TestimonialDatas } from '../../mockData/data';
import Slider from 'react-slick';

const Testimonial = () => {

    //Data arranging for the slick carousel management through an object:-
    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        //for responsive touch management:-
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidestoShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidestoShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidestoShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    //Return show on testimonial section:- 
    return (
        <div className='py-14 mb-10'>
            <div className="container">

                {/**Header Section---> */}
                <div className='text-left mb-10 max-w-[500px] space-y-2 mr-auto'>
                    <h1 className='text-3xl font-bold font-serif'>What Are The Custumers Saying About Us</h1>
                </div>

                {/**Here's Your Testimonial cards:-  */}
                <div>
                    <Slider {...settings}>
                        {/* Destructing the testimonial sec. data */}
                        {
                            TestimonialDatas.map((data) => (
                                <div key={data.id} className='my-6'>
                                    {/* For an entire card section */}
                                    <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10 relative hover:cursor-pointer'>

                                        {/* upper section */}
                                        <div className='flex justify-start items-center gap-5'>
                                            <img src={data.image} alt="data_set_images" className='rounded-full w-16 h-16' />
                                        </div>
                                        {/* Text area of that perticular image section:- */}
                                        <div className='text-left'>
                                            <p className='text-xl font-serif font-semibold text-black'>{data.name}</p>
                                            <p className='font-sans text-gray-800'>{data.resident}</p>
                                        </div>
                                        {/* Bottom section */}
                                        <div className='flex flex-col gap-4 py-6 space-y-4 max-w-[500px]'>
                                            <p className='font-serif text-gray-500 flex text-left text-sm'>{data.text}</p>
                                            <p className='flex flex-col text-left font-sans font-semibold text-gray-900'>Rating:- /5⭐</p>
                                            <p>⭐⭐⭐⭐⭐</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Testimonial
