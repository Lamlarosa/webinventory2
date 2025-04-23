import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img
        src={logoImg}
        alt="Logo"
        style={{ height: '150px', width: 'auto' }}
      />
      <span style={{ fontWeight: 'bold', fontSize: '24px', color: '#007bff' }}>
        OUR TEAM
      </span>
    </div>
  );
}

export default Logo;
