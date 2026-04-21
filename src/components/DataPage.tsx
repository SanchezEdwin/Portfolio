import { useState } from 'react';
import './components.css';

export default function DataPage() {
  const [subTab, setSubTab] = useState('QUESTS');

  return (
    <div className="page-container">
      <div className="sub-nav">
        <button className={`sub-nav-btn ${subTab === 'QUESTS' ? 'active' : ''}`} onClick={() => setSubTab('QUESTS')}>QUESTS</button>
        <button className={`sub-nav-btn ${subTab === 'WORKSHOPS' ? 'active' : ''}`} onClick={() => setSubTab('WORKSHOPS')}>WORKSHOPS</button>
      </div>

      {subTab === 'QUESTS' && (
        <div className="quest-list">
          <div className="quest-item" style={{ borderColor: 'var(--pipboy-green)', boxShadow: '0 0 5px var(--pipboy-green-glow)' }}>
             <div className="quest-title">☐ Misión Activa: IT Technician en GFSI Soutwest</div>
             <div className="quest-desc">
               Roles asumidos en la misión:<br/>
               - Desarrollador de Software.<br/>
               - Soporte Técnico.<br/>
               - Ingeniero de Redes.<br/>
               (Misión en curso)
             </div>
          </div>
        </div>
      )}

      {subTab === 'WORKSHOPS' && (
        <div className="quest-list">
          <div className="quest-item">
             <div className="quest-title">Ingeniería en Sistemas Computacionales</div>
             <div className="quest-desc">Universidad del Atlántico<br/>Egresado. Conocimientos técnicos y lógicos adquiridos exitosamente.</div>
          </div>
        </div>
      )}
    </div>
  );
}
