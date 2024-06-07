import React, { useState } from 'react'

const WorkoutCard = (props) => {
    const { exercise, i } = props;
    
    const [sets, setSets] = useState(0);

    return (
        <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap'>
            <div className='flex flex-col sm:flex-row sm:item-center sm:flex-wrap gap-x-4'>
                <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'>
                    {i+1}
                </h4>

                <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 md:text-center'>{exercise.name.replaceAll("_", " ")}</h2>

                <p className='text-sm text-slate-400 capitalize'>{exercise.type}</p>
            </div>

            <div className='flex flex-col'>
                <h3 className='text-slate-400 text-sm'>Muscles Group</h3>
                <p className="capitalize">{exercise.muscles.join(" & ")}</p>
            </div>

            <div className='flex flex-col'>
                {exercise.description.split("___").map((val, i) => {
                    return (
                        <p key={i} className='mb-2'>{val}</p>
                    )
                })}
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
                {['reps', 'rest', 'tempo'].map(val => {
                    return (
                        <div key={val} className='flex flex-col p-2 rounded-md border border-solid border-slate-800 w-full'>
                            <h3 className='capitalize text-slate-400'>{val === 'reps' ? `${exercise.unit}` : val}</h3>
                            <p className='font-medium'>{exercise[val]}</p>
                        </div>
                    )
                })}
                <button onClick={() => {
                    setSets((sets+1)%6)
                }} className='flex flex-col p-2 rounded-md border-[1.5px] duration-200 border-blue-600 hover:border-blue-400 sm:items-center'>
                    <h3 className='text-slate-400'>Sets Completed</h3>
                    <p>{sets} / 5</p>
                </button>
            </div>
        </div>
    )
}

export default WorkoutCard
