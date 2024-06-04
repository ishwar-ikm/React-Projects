import React from 'react'
import './hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Better education for better world</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit soluta quasi deleniti illo earum perspiciatis laudantium fugit nostrum quas voluptatem architecto modi molestias, id, asperiores minima totam optio perferendis accusamus!</p>
        <button className="btn">Explore more <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
