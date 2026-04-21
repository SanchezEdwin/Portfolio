import { useState } from 'react';
import './components.css';

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
        {subTab === 'LOCAL MAP' ? (
          <>
            <div className="map-marker" style={{ top: '45%', left: '48%' }}>[ YOU ]</div>
            <div style={{ position: 'absolute', top: '20%', left: '20%', opacity: 0.5 }}>[ Servidor Principal ]</div>
            <div style={{ position: 'absolute', top: '70%', left: '80%', opacity: 0.5 }}>[ Nodo de Red ]</div>
          </>
        ) : (
          <>
            <div className="map-marker" style={{ top: '45%', left: '48%' }}>[ REYNOSA ]</div>
            <div style={{ position: 'absolute', top: '30%', left: '70%', opacity: 0.5 }}>[ Sector Noreste ]</div>
          </>
        )}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p>Email de contacto: sanchezescandonedwin@gmail.com</p>
        <p>Frecuencia de radio (Teléfono): +52 899-4183-998</p>
      </div>
    </div>
  );
}
