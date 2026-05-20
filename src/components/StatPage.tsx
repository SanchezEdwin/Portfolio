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
              <div className="stat-bar-bg"><div className="stat-bar-fill" style={{ width: '93%' }}></div></div>
              <span>93/93</span>
            </div>
            <div className="stat-bar-container">
              <span className="stat-label">XP</span>
              <div className="stat-bar-bg"><div className="stat-bar-fill" style={{ width: '93.7%' }}></div></div>
              <span>9370/10000</span>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <p>CONDICIÓN: Listo para Implementar</p>
              <p>NIVEL DE CAFEÍNA: Estable</p>
            </div>
          </div>
        </div>
      )}

      {subTab === 'SPECIAL' && (
        <div className="stat-layout">
           <div className="stat-left">
             <h2>Habilidades Core</h2>
             <p style={{marginTop: '1rem', textAlign: 'center', opacity: 0.8}}>
               Atributos base del sistema de Edwin Sánchez.
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
          <h2>PROYECTOS ACTIVOS (PERKS)</h2>
          <div className="quest-list" style={{ marginTop: '1rem', maxHeight: '350px', overflowY: 'auto', paddingRight: '5px' }}>
            <div className="quest-item" style={{ borderColor: 'var(--pipboy-green)' }}>
              <div className="quest-title">"Order Control" (Trazabilidad de Manufactura)</div>
              <div className="quest-desc">
                Desarrollo de un sistema integral de trazabilidad física y de procesos en planta. Calcula eficiencia de operadores e integra bases de datos para reportes interdepartamentales.
                <br/><strong style={{color: '#fff'}}>REQ: Python, PyQt6, Pandas, MySQL</strong>
              </div>
            </div>
            <div className="quest-item" style={{ borderColor: 'var(--pipboy-green)' }}>
              <div className="quest-title">"Import-Export" (Reconciliación SAT)</div>
              <div className="quest-desc">
                Herramienta de conciliación automática con tolerancia de discrepancias y validaciones del SAT. Reduce el tiempo del proceso manual a la mitad.
                <br/><strong style={{color: '#fff'}}>REQ: Python, PyQt6, NumPy, Pandas</strong>
              </div>
            </div>
            <div className="quest-item" style={{ borderColor: 'var(--pipboy-green)' }}>
              <div className="quest-title">"THREAD" (Control de Inventarios)</div>
              <div className="quest-desc">
                Aplicación móvil corporativa para la localización y conteo de insumos de bordado. Reduce demoras de búsqueda de hasta 30 minutos a segundos.
                <br/><strong style={{color: '#fff'}}>REQ: PowerApps, SharePoint Lists</strong>
              </div>
            </div>
            <div className="quest-item" style={{ borderColor: 'var(--pipboy-green)' }}>
              <div className="quest-title">"EMMA" (Métricas de Eficiencia & Downtime)</div>
              <div className="quest-desc">
                Mapeo de tiempos productivos y paros de máquinas en tiempo real. Traduce registros en análisis visuales para mitigar causas raíz de cuellos de botella.
                <br/><strong style={{color: '#fff'}}>REQ: MS Access, VBA, SQL</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
