import { useEffect, useState } from 'react'
import Buttons from './components/Buttons'
import PlayAudio from './components/PlayAudio';
import blue from "./assets/blue.mp3";
import red from "./assets/red.mp3";
import green from "./assets/green.mp3";
import yellow from "./assets/yellow.mp3";
import wrong from "./assets/wrong.mp3";

function App() {
  const [buttons] = useState(["red", "green", "yellow", "blue"]);

  const [gamePattern, setGamePattern] = useState([]);
  const [userPattern, setUserPattern] = useState([]);
  const [level, setLevel] = useState(1);
  const [started, setStarted] = useState(false);
  const [title, setTitle] = useState("Press any key to play");
  const [audio, setAudio] = useState(null);
  const sounds = { red, green, yellow, blue };

  useEffect(() => {
    const handleKeyPress = () => {
      if (!started) {
        setStarted(true);
        addSequence();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [started]);


  const addSequence = () => {
    let index = Math.floor(Math.random() * 4);
    let chosenColor = buttons[index];

    setAudio(sounds[chosenColor]);

    document.getElementById(chosenColor).classList.add("pressed");

    setTimeout(() => {
      document.getElementById(chosenColor).classList.remove("pressed");
    }, 100);

    setUserPattern([]);
    setTitle(`Level: ${level}`);
    setLevel(prevLevel => prevLevel + 1);
    setGamePattern(prevPattern => [...prevPattern, chosenColor]);
  }

  const checkAnswer = (index, color) => {
    if (gamePattern[index] === color) {
      if (gamePattern.length - 1 === index) {
        setTimeout(function () {
          addSequence();
        }, 1000);
        return false;
      }
      return true;
    }
    else {
      setStarted(false);
      setTitle(`Game Over! press any key to play again`);
      setGamePattern([]);
      setUserPattern([]);
      setLevel(1);

      document.getElementById("body").classList.add("game-over");

      setTimeout(() => {
        document.getElementById("body").classList.remove("game-over");
      }, 100);

      setAudio(wrong);

      return false;
    }
  }


  return (
    <section id='body' className='flex flex-col justify-center items-center min-h-screen w-full bg-slate-950'>
      <h1 className='text-6xl text-green-400'>Simon Game</h1>
      <h1 className='text-4xl text-green-600 m-7'>{title}</h1>

      <div className='grid grid-cols-2 gap-10 m-10'>
        {buttons.map((button, index) => {
          return <Buttons key={index} color={button} setAudio={setAudio} userPattern={userPattern} setUserPattern={setUserPattern} checkAnswer={checkAnswer}
          sound={sounds[button]} />
        })}
      </div>

        {audio !== null && <PlayAudio src={audio}/>} 
    </section>
  )
}

export default App
