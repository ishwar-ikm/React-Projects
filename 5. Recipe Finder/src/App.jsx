import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Favorites from './Components/Favorites'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [nav, setNav] = useState("home");

  return (
    <div className='flex'>
      <Sidebar nav={nav}/>
      <Routes>
        <Route path="/" element={<Home  setNav={setNav}/>}/>
        <Route path="/favorites" element={<Favorites setNav={setNav}/>} />
      </Routes>
      
    </div>
  )
}

export default App
