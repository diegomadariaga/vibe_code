import React from 'react';
import type { Dinosaur } from '../types/dinosaur';
import './DinosaurModal.css';

interface DinosaurModalProps {
  dinosaur: Dinosaur | null;
  isOpen: boolean;
  onClose: () => void;
}

const DinosaurModal: React.FC<DinosaurModalProps> = ({ dinosaur, isOpen, onClose }) => {
  if (!isOpen || !dinosaur) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <img 
            src={dinosaur.imageUrl} 
            alt={dinosaur.name}
            className="modal-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/600x400/8B4513/FFFFFF?text=' + encodeURIComponent(dinosaur.name);
            }}
          />
          <div className="modal-title">
            <h2>{dinosaur.name}</h2>
            <p className="modal-scientific-name">{dinosaur.scientificName}</p>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-stats-grid">
            <div className="modal-stat">
              <h4>Período</h4>
              <p>{dinosaur.period}</p>
            </div>
            <div className="modal-stat">
              <h4>Dieta</h4>
              <p className={`diet-badge ${dinosaur.diet.toLowerCase()}`}>{dinosaur.diet}</p>
            </div>
            <div className="modal-stat">
              <h4>Longitud</h4>
              <p>{dinosaur.length}</p>
            </div>
            <div className="modal-stat">
              <h4>Peso</h4>
              <p>{dinosaur.weight}</p>
            </div>
            <div className="modal-stat">
              <h4>Hábitat</h4>
              <p>{dinosaur.habitat}</p>
            </div>
          </div>

          <div className="modal-description">
            <h4>Descripción</h4>
            <p>{dinosaur.description}</p>
          </div>

          <div className="modal-facts">
            <h4>Datos Curiosos</h4>
            <ul>
              {dinosaur.funFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinosaurModal;
