import React, { useState } from 'react';
import Tabel from './components/Tabel';
import Logo from './components/Logo';
import logoImg from './assets/logo.png';

function App() {
  return (
    <div className="container mt-5">
      <Logo src={logoImg} alt="Logo" label="OUR TEAM" />
      <Tabel />
    </div>
  );
}

export default App;
