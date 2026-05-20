import { useState } from 'react';
import './components.css';
import addressImg from '../assets/address.png';

export default function MapPage() {
  const [subTab, setSubTab] = useState('LOCAL MAP');

  return (
    <div className="page-container">
      <div className="sub-nav">
        <button className={`sub-nav-btn ${subTab === 'LOCAL MAP' ? 'active' : ''}`} onClick={() => setSubTab('LOCAL MAP')}>LOCAL MAP</button>
        <button className={`sub-nav-btn ${subTab === 'WORLD MAP' ? 'active' : ''}`} onClick={() => setSubTab('WORLD MAP')}>WORLD MAP</button>
      </div>

      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <h2>UBICACIÓN ACTUAL: REYNOSA, TAMAULIPAS, MÉXICO</h2>
      </div>

      <div className="map-container">
        <img src={addressImg} alt="Mapa de Dirección" className="map-bg-image" />
        
        {subTab === 'LOCAL MAP' ? (
          <div style={{ zIndex: 2, position: 'absolute', width: '100%', height: '100%' }}>
            <div className="map-marker" style={{ top: '45%', left: '48%', zIndex: 3 }}>[ YOU ]</div>
            <div style={{ position: 'absolute', top: '20%', left: '15%', opacity: 0.8, fontSize: '1.2rem' }}>[ Servidor Central ]</div>
            <div style={{ position: 'absolute', top: '75%', left: '75%', opacity: 0.8, fontSize: '1.2rem' }}>[ Gateway de Red ]</div>
          </div>
        ) : (
          <div style={{ zIndex: 2, position: 'absolute', width: '100%', height: '100%' }}>
            <div className="map-marker" style={{ top: '45%', left: '48%', zIndex: 3 }}>[ REYNOSA ]</div>
            <div style={{ position: 'absolute', top: '30%', left: '75%', opacity: 0.8, fontSize: '1.2rem' }}>[ Sector Noreste ]</div>
          </div>
        )}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1.4rem' }}>
        <p>📡 <strong>Frecuencia de Contacto:</strong> +52 899-418-3998</p>
        <p>📧 <strong>Enlace de Datos:</strong> sanchezescandonedwin@gmail.com</p>
      </div>
    </div>
  );
}
