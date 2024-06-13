import React, { useEffect } from 'react'
import RecipeCard from './RecipeCard';

export default function Favorites({setNav}) {
    let fav = JSON.parse(localStorage.getItem('favorites')) || [];
    useEffect(() => {
      setNav("fav");
    }, [])
  return (
    <div className='bg-[#faf9fe] p-10 lg:px-[150px] flex-1 min-h-screen'>
      <div className='w-full mx-auto'>
        <p className='font-bold text-3xl md:text-5xl my-4'>My Favorites</p>

        {fav.length > 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {fav.map((recipe, index) => {
                return <RecipeCard key={index} recipe={recipe}/>
            })}
        </div> : <div className='h-[60vh] mx-auto'><img src="404.svg" alt="" /></div>}
      </div>
    </div>
  )
}
