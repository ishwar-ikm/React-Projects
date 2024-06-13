import { Heart, HeartPulse, Soup } from 'lucide-react'
import React, { useState } from 'react'
import { getRandomColor } from '../Utils/random_color'

const RecipeCard = ({ recipe }) => {
    let color = getRandomColor();

    const [isFav, setIsFav] = useState(localStorage.getItem('favorites')?.includes(recipe.label));

    const addToFav = () => {
        let favItem = JSON.parse(localStorage.getItem('favorites')) || [];
        const isPresent = favItem.some(fav => fav.label === recipe.label);
        console.log(isPresent);

        if(isPresent){
            favItem = favItem.filter(fav => fav.label !== recipe.label);
            setIsFav(false);
        } 
        else{
            favItem = [...favItem, recipe];
            setIsFav(true);
        }

        localStorage.setItem('favorites', JSON.stringify(favItem));
    }

    return (
        <div className={`flex flex-col rounded-md ${color.bg} overflow-hidden p-3 relative`}>
            <a href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`} target='_blank' className='relative h-40'>
                <div className='skeleton absolute inset-0'></div>
                <img className='rounded-md w-full h-full object-cover opacity-0 transition-opacity duration-500' src={recipe.image} alt="" 
                onLoad={e => {
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.previousElementSibling.style.display = "none";
                }}
                />
                <div className='p-1 absolute bottom-2 left-2 bg-white rounded-full cursor-pointer flex items-center'>
                    <Soup size={"16"} /> {recipe.yield} Servings
                </div>

                <div className='p-2 absolute top-2 right-2 bg-white rounded-full cursor-pointer flex items-center'
                    onClick={(e) => {
                        e.preventDefault();
                        addToFav();
                    }}
                >
                    <Heart size={"16"} className={isFav ? 'fill-red-600 text-red-600' : 'hover:fill-red-600 hover:text-red-600'} />
                </div>
            </a>

            <div className='flex mt-1'>
                <p className='font-bold'>{recipe.label}</p>
            </div>

            <p className='capitalize mt-1 mb-1'>{recipe.cuisineType} Kitchen</p>

            <div className='flex flex-wrap gap-2'>
                {[recipe.healthLabels[0], recipe.healthLabels[1]].map((label, index) => {
                    return (
                        <div key={index} className={`flex gap-1 ${color.badge} items-center p-1 rounded-md`}>
                            <HeartPulse size={16} />
                            <span className='text-sm tracking-tighter font-semibold'>{label}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecipeCard
