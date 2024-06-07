import React from 'react'
import SectionWrapper from './SectionWrapper'
import WorkoutCard from './WorkoutCard';

const Workout = (props) => {
  const {workout} = props;
  return (
    <div>
      <SectionWrapper id={"formulate"} header={"Welcome to"} title={["The", "Challenge", "area"]}>

        <div className='flex flex-col gap-4'>
          {workout.map((exercise, i) => {
            return (<WorkoutCard exercise={exercise} i={i} key={i}/>)
          })}
        </div>

      </SectionWrapper>
    </div>
  )
}

export default Workout
