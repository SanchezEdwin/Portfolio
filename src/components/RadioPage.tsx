import { useState } from 'react';
import './components.css';

export default function RadioPage() {
  const [activeStation, setActiveStation] = useState<string | null>(null);

  const toggleStation = (station: string) => {
    if (activeStation === station) {
      setActiveStation(null); // Apagar radio
    } else {
      setActiveStation(station);
    }
  };

  return (
    <div className="page-container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>SEÑALES DE RADIO DETECTADAS</h2>
        <p>Sintoniza para conectar o escuchar música.</p>
        {activeStation && (
          <p style={{ marginTop: '1rem', animation: 'blink 2s infinite' }}>
            Estableciendo conexión segura...
          </p>
        )}
      </div>

      <div className="radio-list">
        <a 
          href="https://github.com/SanchezEdwin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="radio-station" 
          onClick={() => toggleStation('GitHub')}
          style={{ backgroundColor: activeStation === 'GitHub' ? 'var(--pipboy-green)' : '', color: activeStation === 'GitHub' ? 'var(--pipboy-dark)' : '' }}
        >
          <span>►</span> Frecuencia GitHub (Repositorios de Código)
        </a>
        
        <a 
          href="https://www.linkedin.com/in/edwin-sanchezescandon/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="radio-station" 
          onClick={() => toggleStation('LinkedIn')}
          style={{ backgroundColor: activeStation === 'LinkedIn' ? 'var(--pipboy-green)' : '', color: activeStation === 'LinkedIn' ? 'var(--pipboy-dark)' : '' }}
        >
          <span>►</span> Frecuencia LinkedIn (Red Profesional)
        </a>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center', opacity: 0.8 }}>
        <p>Haz clic en una estación para abrir el enlace en tu terminal de RobCo.</p>
      </div>
    </div>
  );
}
