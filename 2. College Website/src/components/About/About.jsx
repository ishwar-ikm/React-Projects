import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from "../../assets/play-icon.png"

const About = (props) => {

  const playVideo = () => {
    props.setPlay(true);
  }

  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img onClick={playVideo} src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>About Univeristy</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima sapiente aliquam suscipit, harum asperiores iusto sint tempora ea rerum nostrum deleniti nemo iure. Sapiente nihil repellendus id sint atque obcaecati!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima sapiente aliquam suscipit, harum asperiores iusto sint tempora ea rerum nostrum deleniti nemo iure. Sapiente nihil repellendus id sint atque obcaecati!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima sapiente aliquam suscipit, harum asperiores iusto sint tempora ea rerum nostrum deleniti nemo iure. Sapiente nihil repellendus id sint atque obcaecati!</p>
        </div>
      
    </div>
  )
}

export default About
