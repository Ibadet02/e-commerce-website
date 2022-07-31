import { useLocalStorage } from './localStorage/useLocalStorge';
import Data from './d.json'
import { useEffect, useState } from 'react';
import { Routes, Route } from'react-router-dom'
import { serverData } from './interfaces';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import './App.css';
import './styles/responsive.css'
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('isDarkModeOpen', false)
  const [server, setServer] = useState<null | serverData>(null)
  useEffect(()=>{
    setServer(Data.data)
    // fetch("https://github.com/Ibadet02/e-commerce-website/tree/'main'/data")
    // .then(res=>res.json())
    // .then(data=>{
    //   setServer(data)
    // })
  },[])
  return (
    <>
      <Navbar
      setDarkMode = {setDarkMode}
      darkMode = {darkMode}
      />
      <Routes>
        <Route path='/' element={server && <Home darkMode = {darkMode} server={server} setServer={setServer} />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {
        server && <Footer darkMode = {darkMode}/>
      }
    </>
  );
}

export default App;
