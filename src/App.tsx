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
  const [server, setServer] = useState<null | serverData>(null)
  useEffect(()=>{
    fetch('http://localhost:8000/data')
    .then(res=>res.json())
    .then(data=>{
      setServer(data)
    })
  },[])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={server && <Home server={server} setServer={setServer} />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
