import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Manga from './pages/Manga';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import MangaDesc from './components/MangaDesc';
import Work from './pages/Work';
import WorkDesc from './components/WorkDesc';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/work/:id" element={<WorkDesc/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/manga/:id" element={<MangaDesc/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/manga" element={<Manga/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </Router>
  );
}

export default App;
