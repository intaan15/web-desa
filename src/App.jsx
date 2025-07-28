import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import Dashboard from './pages/Dashboard'
import Profil from './pages/Profil'
import Infografis from './pages/Infografis'
import Umkm from './pages/Umkm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/infografis" element={<Infografis />} />
        <Route path="/umkm" element={<Umkm />} />
      </Routes>
    </Router>
  );
}

export default App
