import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img src="/nicolinzoo-logo.svg" alt="Nicolinzoo Logo" className="logo" />
          <div className="title-section">
            <h1 className="main-title">Nicolinzoo Jurassic</h1>
            <p className="subtitle">Zoológico de Dinosaurios</p>
          </div>
        </div>
        <div className="header-description">
          <p>¡Bienvenidos al zoológico de dinosaurios más increíble del mundo! 
             Descubre las majestuosas criaturas que dominaron nuestro planeta hace millones de años.</p>
        </div>
      </div>
      <div className="header-decoration">
        <div className="fossil-pattern"></div>
      </div>
    </header>
  );
};

export default Header;
