import React from 'react'
import { IoRestaurantOutline } from "react-icons/io5";
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='w-full'>
            <div className='bg-[#00acee] text-white flex items-center ps-10'>
                <IoRestaurantOutline className='text-3xl me-2' />
                <p className='font-semibold py-3 text-2xl'>Alan Resto</p>
            </div>
            <div className='border-b-2 border-b-black/20 text-gray-600 shadow-xl font-[500] flex gap-15 ps-30 py-4'>
                <NavLink
                    to="/food"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-[#00acee] border-b-2 border-[#00acee]'
                            : 'hover:text-[#00acee]'
                    }
                >
                    Food
                </NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-[#00acee] border-b-2 border-[#00acee]'
                            : 'hover:text-[#00acee]'
                    }
                >
                    Transaksi
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
