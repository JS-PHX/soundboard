import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Song1 from './components/Song1';
import Song2 from './components/Song2';
import { AnimatePresence } from 'framer-motion';

export default function App() {

const location = useLocation();

  return (
    <>
      <Nav />
      <AnimatePresence mode='wait'>
      <Routes  key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/song1" element={<Song1 />} />
        <Route path="/song2" element={<Song2 />} />
        {/* Other routes */}
      </Routes>
      </AnimatePresence>
    </>
  );
}
