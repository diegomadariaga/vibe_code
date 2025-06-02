import React from 'react';
import type { Dinosaur } from '../types/dinosaur';
import './DinosaurCard.css';

interface DinosaurCardProps {
  dinosaur: Dinosaur;
  onSelect: (dinosaur: Dinosaur) => void;
}

const DinosaurCard: React.FC<DinosaurCardProps> = ({ dinosaur, onSelect }) => {
  return (
    <div className="dinosaur-card" onClick={() => onSelect(dinosaur)}>
      <div className="dinosaur-image-container">
        <img 
          src={dinosaur.imageUrl} 
          alt={dinosaur.name}
          className="dinosaur-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/500x300/8B4513/FFFFFF?text=' + encodeURIComponent(dinosaur.name);
          }}
        />
        <div className="period-badge">{dinosaur.period}</div>
      </div>
      <div className="dinosaur-info">
        <h3 className="dinosaur-name">{dinosaur.name}</h3>
        <p className="scientific-name">{dinosaur.scientificName}</p>
        <div className="dinosaur-stats">
          <div className="stat">
            <span className="stat-label">Dieta:</span>
            <span className={`diet-badge ${dinosaur.diet.toLowerCase()}`}>{dinosaur.diet}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Longitud:</span>
            <span className="stat-value">{dinosaur.length}</span>
          </div>
        </div>
        <p className="dinosaur-description">{dinosaur.description}</p>
      </div>
    </div>
  );
};

export default DinosaurCard;
