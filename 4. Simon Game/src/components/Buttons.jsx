import React, { useRef } from 'react'

const Buttons = (props) => {
  const { color, userPattern, setUserPattern, checkAnswer, setAudio, sound } = props;

  const bgColorClass = `bg-${color}-800`;
  const btn = useRef()

  const handleClick = (e) => {
    btn.current.classList.add("pressed");

    setTimeout(() => {
      btn.current.classList.remove("pressed");
    }, 100);

    setAudio(sound);

    console.log(color);
    let ans = checkAnswer(userPattern.length, color);
    if (ans) setUserPattern(prev => [...prev, color]);
  }

  return (
    <button id={color} ref={btn} onClick={handleClick} className={`${bgColorClass} text-white h-[200px] w-[200px] rounded-[20px] border-[8px] border-slate-800`}>

    </button>
  );
}

export default Buttons;
