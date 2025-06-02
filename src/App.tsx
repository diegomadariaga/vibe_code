import { useState } from 'react';
import Header from './components/Header';
import DinosaurCard from './components/DinosaurCard';
import DinosaurModal from './components/DinosaurModal';
import { dinosaurs } from './data/dinosaurs';
import type { Dinosaur } from './types/dinosaur';
import './App.css';

function App() {
  const [selectedDinosaur, setSelectedDinosaur] = useState<Dinosaur | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDinosaurSelect = (dinosaur: Dinosaur) => {
    setSelectedDinosaur(dinosaur);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedDinosaur(null);
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section className="intro-section">
          <h2>Nuestros Dinosaurios</h2>
          <p>Haz clic en cualquier dinosaurio para conocer más sobre estas fascinantes criaturas prehistóricas.</p>
        </section>
        
        <section className="dinosaurs-grid">
          {dinosaurs.map((dinosaur) => (
            <DinosaurCard 
              key={dinosaur.id} 
              dinosaur={dinosaur} 
              onSelect={handleDinosaurSelect}
            />
          ))}
        </section>
      </main>

      <DinosaurModal 
        dinosaur={selectedDinosaur}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />

      <footer className="footer">
        <p>&copy; 2025 Nicolinzoo Jurassic. Todos los derechos reservados.</p>
        <p>Un zoológico virtual donde los dinosaurios cobran vida 🦕</p>
      </footer>
    </div>
  );
}

export default App;
