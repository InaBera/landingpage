import React from 'react'
import { FaBars } from "react-icons/fa6";
const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center justify-center gap-2'>
                <img src="./assets/Logo.svg" alt="logo" />
                <button className='h-14 bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-full'>Hoster is Hiring</button>
            </div>
            <ul className='hidden lg:flex justify-between items-center font-lato gap-6 text-gray-500'>
                <li><a href="#">Plans</a></li>
                <li><a href="#">Find Domain</a></li>
                <li><a href="#">Why Hoster</a></li>


            </ul>
            <div className='hidden lg:flex justify-center items-center font-lato gap-6 text-gray-500'>
                <a href="#">SignIn</a>
                <button className='rounded-md bg-blue-400 hover:bg-blue-600 text-white px-7 py-3 font-semibold'>Join waitlist</button>
            </div>
            <div className='lg:hidden'>
                <FaBars />

            </div>

        </div>
    )
}
export default Header