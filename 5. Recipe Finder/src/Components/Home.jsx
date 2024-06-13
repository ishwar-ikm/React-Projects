import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import { Search } from 'lucide-react'

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;
const API_ENDPOINT = "https://api.edamam.com/api/recipes/v2";

const Home = ({setNav}) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRecipe = async (query) => {
        setLoading(true);
        setRecipes([]);

        try {
            const res = await fetch(`${API_ENDPOINT}/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}&type=public`);
            const data = await res.json();
            setRecipes(data.hits);
            console.log(data.hits)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRecipe("chicken");
        setNav("home");
    }, [])

    const handleSearchRecipe = (e) => {
        e.preventDefault();
        fetchRecipe(e.target[0].value);
        console.log(e.target);
    }

    return (
        <div className='bg-[#faf9fe] p-10 lg:px-[100px] flex-1 min-h-screen'>
            <div className='w-full mx-auto'>
                <form className='flex' onSubmit={handleSearchRecipe}>
                    <label className='input shadow-md flex items-center gap-2 w-[85%] m-2'>
                        <Search size={"24"} />
                        <input type="text" className='text-sm md:text-md' placeholder='Find recipes...' />
                    </label>
                    <input type="submit" className='btn btn-light flex flex-1 m-2 text-lg font-normal shadow-md' value="Search"/>
                </form>

                <h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended recipes</h1>
                <p className='font-semibold mt-2 mb-2'>Popular Choices</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {!loading && recipes.map(({recipe}, index) => {
                        return <RecipeCard key={index} recipe={recipe}/>
                    })}

                    {loading && [...Array(9)].map((_, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-4 w-full">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
