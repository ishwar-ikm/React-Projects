import React from 'react'
import Button from "./Button"

const Hero = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-10 text-center max-w-[1100px] w-full mx-auto p-4'>
            <div className='gap-7'>
                <p className='text-lg'>It's time to get</p>
                <h1 className='uppercase font-semibold text-5xl sm:text-5xl mid:text-6xl lg:text-7xl'>Gym<span className='text-blue-400'>Guru</span></h1>
            </div>
            <p className='lg:text-lg sm:text-1xl md:text-base font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae atque facere minima ad voluptatum pariatur reprehenderit sapiente aperiam soluta repellat sunt consequatur laboriosam qui, fuga odio quos consequuntur obcaecati! Fugiat?</p>

            <Button func={() => {
                window.location.href = '#generate'
            }} text="Accept & begin"/>
        </div>
    )
}

export default Hero
