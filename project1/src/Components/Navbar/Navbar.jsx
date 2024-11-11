import React, { useState } from 'react'
//Search menu atributes here:-
import { NavbarMenu } from '../../mockData/data';
/** Navbar Elements data given here:- */
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import ResponsiveMenu from '../ResponsiveMenu.jsx';


const Navbar = () => {

    //For how click for a mobile input:-(by default is flase!)
    const [open, setOpen] = useState(false);
    return (
        //Navbar create:-
        <>
            <nav>
                <div className="container flex justify-between items-center py-8">
                    {/**Logo Section */}
                    <div className='text-2xl flex items-center gap-2 font-bold py-8 uppercase hover:cursor-pointer'>
                        <FaDumbbell />
                        <p>Coders</p>
                        <p className='text-secondary'>Gym</p>
                    </div>

                    {/**Menu Section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-400'>
                            {NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a className='inline-block py-1 px-3 hover:text-primary font-semibold 
                                                    cursor-pointer'
                                            href={item.link}>{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/**Icons Section */}
                    <div className='flex items-center gap-4 md:text-gray-600'>
                        <button className='text-2xl hover:bg-primary hover:text-black rounded-full 
                                        py-2 duration-200 px-2 hover:font-bold'>
                            <CiSearch />
                        </button>

                        <button className='text-2xl hover:bg-primary hover:text-black rounded-full 
                                        py-2 duration-200 px-2 hover:font-bold'>

                            <BsCart2 />
                        </button>

                        <button className='hover:bg-primary text-primary font-semibold hover:text-white 
                                            rounded-md border-2 px-6 border-primary py-2 duration-200 
                                            hidden md:block'>Login</button>
                    </div>

                    {/**Mobile humberger menu section(During responsive for smaller device use(as toggle use):- ) */}
                    <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                        <IoMdMenu className='text-3xl text-gray-300' />
                    </div>
                </div>
            </nav>

            {/**Acc. to the responsive for mobile sidebar section(with a prof. value 'open':):- */}
            <div>
                <ResponsiveMenu open={open} />
            </div>
        </>
    )
}

export default Navbar