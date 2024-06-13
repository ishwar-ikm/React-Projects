import { Heart, Home } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LargeScreenSideBar = ({nav}) => {
    return (
        <div className='p-3 md:p-10 border-r-2 w-24 md:w-64 min-h-screen hidden sm:block'>
            <div className='flex flex-col gap-20 sticky top-10 left-0'>
                <div className="w-full">
                    <img src="/logo.svg" alt="" className='hidden md:block' />
                    <img src="/mobile-logo.svg" alt="" className='block md:hidden' />
                </div>

                <ul className='flex flex-col items-center md:items-start gap-8'>
                    <Link to={"/"} className='flex gap-1'>
                        <Home size={"24"} className={nav === "home" ? 'fill-red-500' : ''}/>
                        <span className={`hidden md:block ` + (nav === "home" ? 'font-bold scale-105 transition-transform duration-300' : 'font-semibold')}>Home</span>
                    </Link>
                    <Link to={"/favorites"} className='flex gap-1'>
                        <Heart size={"24"} className={nav === "fav" ? 'fill-red-500' : ''}/>
                        <span className={`hidden md:block ` + (nav === "fav" ? 'font-bold scale-105 transition-transform duration-300' : 'font-semibold')}>Favorites</span>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

const SmallScreenBottomBar = ({nav}) => {
    return (
        <div className='flex justify-center p-2 border-t-2 gap-10 w-full z-10 fixed bottom-0 bg-white sm:hidden'>
            <Link to={"/"} className='flex gap-1'>
                <Home size={"24"} className={nav === "home" ? 'fill-red-500' : ''}/>
            </Link>
            <Link to={"/favorites"} className='flex gap-1'>
                <Heart size={"24"} className={nav === "fav" ? 'fill-red-500' : ''}/>
            </Link>
        </div>
    )
}

const Sidebar = ({nav}) => {
    return (
        <>
            <LargeScreenSideBar nav={nav}/>
            <SmallScreenBottomBar nav={nav}/>
        </>
    )
}

export default Sidebar
