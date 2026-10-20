import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Configurator from './Pages/Configurator';
import News from './Pages/News';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}