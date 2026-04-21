import { useState } from 'react';
import './components.css';
import vaultBoyImg from '../assets/vault_boy.png';

export default function StatPage() {
  const [subTab, setSubTab] = useState('STATUS');

  return (
    <div className="page-container">
      <div className="sub-nav">
        <button className={`sub-nav-btn ${subTab === 'STATUS' ? 'active' : ''}`} onClick={() => setSubTab('STATUS')}>STATUS</button>
        <button className={`sub-nav-btn ${subTab === 'SPECIAL' ? 'active' : ''}`} onClick={() => setSubTab('SPECIAL')}>S.P.E.C.I.A.L.</button>
        <button className={`sub-nav-btn ${subTab === 'PERKS' ? 'active' : ''}`} onClick={() => setSubTab('PERKS')}>PERKS</button>
      </div>

      {subTab === 'STATUS' && (
        <div className="stat-layout">
          <div className="stat-left">
            <div className="vault-boy-container">
              <img src={vaultBoyImg} alt="Vault Boy" className="vault-boy-img" />
            </div>
            <h2>INGENIERO EN SISTEMAS COMPUTACIONALES</h2>
          </div>
          <div className="stat-right">
            <div className="stat-bar-container">
              <span className="stat-label">HP</span>
              <div className="stat-bar-bg"><div className="stat-bar-fill" style={{ width: '100%' }}></div></div>
              <span>100/100</span>
            </div>
            <div className="stat-bar-container">
              <span className="stat-label">AP</span>
              <div className="stat-bar-bg"><div className="stat-bar-fill" style={{ width: '90%' }}></div></div>
              <span>90/100</span>
            </div>
            <div className="stat-bar-container">
              <span className="stat-label">XP</span>
              <div className="stat-bar-bg"><div className="stat-bar-fill" style={{ width: '75%' }}></div></div>
              <span>7500</span>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <p>CONDICIÓN: Óptima</p>
              <p>NIVEL DE CAFEÍNA: Estable</p>
            </div>
          </div>
        </div>
      )}

      {subTab === 'SPECIAL' && (
        <div className="stat-layout">
           <div className="stat-left">
             <h2>Atributos Base</h2>
             <p style={{marginTop: '1rem', textAlign: 'center', opacity: 0.8}}>
               Define tus capacidades fundamentales.
             </p>
           </div>
           <div className="stat-right">
              <div className="special-list">
                <div className="special-item"><span>Strength (Cableado estructurado)</span> <span>8</span></div>
                <div className="special-item"><span>Perception (Mejora de procesos)</span> <span>8</span></div>
                <div className="special-item"><span>Endurance (Trabajo bajo presión)</span> <span>8</span></div>
                <div className="special-item"><span>Charisma (Atención al cliente)</span> <span>10</span></div>
                <div className="special-item"><span>Intelligence (Resolución de problemas)</span> <span>10</span></div>
                <div className="special-item"><span>Agility (Adaptabilidad)</span> <span>8</span></div>
                <div className="special-item"><span>Luck (Pensamiento crítico)</span> <span>8</span></div>
              </div>
           </div>
        </div>
      )}

      {subTab === 'PERKS' && (
        <div>
          <h2>Habilidades Especiales</h2>
          <div className="quest-list" style={{ marginTop: '1rem' }}>
            <div className="quest-item" style={{ borderColor: 'var(--pipboy-green)' }}>
              <div className="quest-title">"Apaga y Enciende" (Soporte Táctico)</div>
              <div className="quest-desc">Soluciona el 50% de los problemas de software con un simple reinicio. Otorga +3 en Carisma al tranquilizar a los usuarios.</div>
            </div>
            <div className="quest-item" style={{ borderColor: 'var(--pipboy-green)' }}>
              <div className="quest-title">"Maestro de la Consola"</div>
              <div className="quest-desc">Experto en automatización del Yermo. Scripts en PowerShell y Batch ejecutan tareas aburridas en segundo plano.</div>
            </div>
            <div className="quest-item" style={{ borderColor: 'var(--pipboy-green)' }}>
              <div className="quest-title">"Visión Estructural"</div>
              <div className="quest-desc">Dominio del cableado y redes. Capacidad de crimpar cables RJ45 en la oscuridad y detectar cuellos de botella a simple vista.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
