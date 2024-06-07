import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS, SCHEMES } from '../utils/data'
import Button from './Button'

function Header(props) {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='font-semibold text-5xl lg:text-6xl text-slate-400'>{props.index}</p>
                <h4 className='text-3xl'>{props.title}</h4>
            </div>
            <p className='text-sm mx-auto'>{props.description}</p>
        </div>
    )
}

const Generator = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const {poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props;

    const toggleModel = () => {
        setShowModal(!showModal);
    }

    const addMuscles = (muscleGroup) => {
        console.log(muscles.length);
        console.log(muscles);
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => {
                return val !== muscleGroup;
            }))
            return;
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup]);
            setShowModal(false);
            return;
        }

        if (muscles.length > 2) {
            return;
        }

        
        setMuscles([...muscles, muscleGroup]);
        if(muscles.length == 2) setShowModal(false);
    }

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)

    return (
        <div>
            <SectionWrapper id={"generate"} header={"Generate Your Workout"} title={["", time, ""]}>

                <Header index={'01'} title={"Pick your poison"} description={"Select the workout you need to endure."} />

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                    {Object.keys(WORKOUTS).map((item, itemsIndex) => {
                        return (
                            <button onClick={() => {
                                setPoison(item);
                                setMuscles([]);
                            }} className={
                                'bg-slate-950 border border-blue-400 py-4 rounded-lg duration-200 hover:border-red-400 ' +
                                (item === poison ? 'border-red-400' : 'border-blue-400')
                            } key={itemsIndex}><p className='capitalize'>{item.replaceAll("_", " ")}</p></button>
                        )
                    })}
                </div>

                <Header index={'02'} title={"Lock on targets"} description={"Select the muscles judged for annihilation."} />

                <div className='bg-slate-950 border border-blue-400 p-4 rounded-lg flex flex-col'>
                    <button onClick={toggleModel} className='relative flex justify-center items-center'>
                        <p className='capitalize'>{muscles.length === 0 ? 'Select Muscle Groups' : muscles.join(' ')}</p>
                        {showModal ? <i className="fa-solid fa-caret-up absolute right-3"></i> : <i className="fa-solid fa-caret-down absolute right-3"></i>}
                    </button>
                    {showModal && (
                        <div className='flex flex-col p-3'>
                            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, index) => {
                                return (
                                    <button onClick={() => {
                                        addMuscles(muscleGroup)
                                    }} key={index}>
                                        <p className={
                                            'capitalize hover:text-blue-400 duration-200 ' +
                                            (muscles.includes(muscleGroup) ? 'text-blue-400' : '')
                                        }>{muscleGroup}</p>
                                    </button>
                                )
                                })}
                        </div>
                    )}
                </div>

                <Header index={'03'} title={"Become Juggernaut"} description={"Select your ultimate objective."} />

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    {Object.keys(SCHEMES).map((scheme, schemesIndex) => {
                        return (
                            <button onClick={() => {
                                setGoal(scheme);
                            }} className={
                                'bg-slate-950 border px-3 border-blue-400 py-4 rounded-lg duration-200 hover:border-violet-700 ' +
                                (scheme === goal ? 'border-violet-700' : 'border-blue-400')
                            } key={schemesIndex}><p className='capitalize'>{scheme.replaceAll("_", " ")}</p></button>
                        )
                    })}
                </div>
                <Button func={updateWorkout} text="Formulate"/>
                <div className='mb'></div>
            </SectionWrapper>
        </div>
    )
}

export default Generator
