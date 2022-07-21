import { Routes, Route } from'react-router-dom'
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import './App.css';
import './styles/responsive.css'
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
