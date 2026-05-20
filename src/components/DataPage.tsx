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
        <div className="quest-list" style={{ maxHeight: '420px', overflowY: 'auto', paddingRight: '5px' }}>
          <div className="quest-item" style={{ borderColor: 'var(--pipboy-green)', boxShadow: '0 0 5px var(--pipboy-green-glow)', marginBottom: '1.5rem' }}>
             <div className="quest-title" style={{ color: 'var(--pipboy-green)' }}>☐ Misión Activa: IT Technician @ Gear for Sports Southwest</div>
             <div className="quest-desc" style={{ marginTop: '0.5rem', fontSize: '1.15rem' }}>
               <em>Junio 2023 - Presente | Reynosa, Tamaulipas</em><br/><br/>
               Objetivos de Misión:<br/>
               - 🛠️ <strong>Desarrollo y Automatización:</strong> Creación de herramientas internas (MS Access, PowerApps, Python, SharePoint, SQL/MySQL) para modernizar operaciones departamentales.<br/>
               - 🛡️ <strong>Héroe de Ciberseguridad:</strong> Contribución a la recuperación de más de 100 computadoras en 8 días tras ataque de malware usando SCCM.<br/>
               - 🌐 <strong>Ingeniería de Redes:</strong> Diagnóstico y mantenimiento de switches, cableado estructurado, direccionamiento IP (DHCP/DNS), VLANs y cámaras CCTV IP/análogas.<br/>
               - 🖥️ <strong>Soporte e Infraestructura:</strong> Administración de servidores Windows Server, Active Directory y migración de dominios corporativos con cero tiempo de inactividad.
             </div>
          </div>
          <div className="quest-item" style={{ borderColor: 'rgba(20, 253, 206, 0.5)' }}>
             <div className="quest-title">☑ Misión Completada: IT Clerk @ Gear for Sports Southwest</div>
             <div className="quest-desc" style={{ marginTop: '0.5rem', fontSize: '1.15rem' }}>
               <em>Junio 2022 - Junio 2023 | Reynosa, Tamaulipas</em><br/><br/>
               Objetivos Logrados:<br/>
               - 📦 <strong>Control de Inventario:</strong> Gestión y trazabilidad precisa de más de 200 activos de hardware y licencias de software.<br/>
               - 📝 <strong>Estandarización:</strong> Creación de documentación de procedimientos de IT y guías de solución de problemas para reducir dependencias informales.<br/>
               - 🔌 <strong>Soporte General:</strong> Apoyo en cableado estructurado, configuración de estaciones de trabajo y despliegue de equipos operativos.
             </div>
          </div>
        </div>
      )}

      {subTab === 'WORKSHOPS' && (
        <div className="quest-list">
          <div className="quest-item" style={{ borderColor: 'var(--pipboy-green)', marginBottom: '1.5rem' }}>
             <div className="quest-title">Ingeniería en Sistemas Computacionales</div>
             <div className="quest-desc" style={{ marginTop: '0.5rem', fontSize: '1.15rem' }}>
               <strong>Universidad del Atlántico (2023)</strong><br/>
               <em>Reynosa, Tamaulipas | Promedio Académico: 93.70</em><br/><br/>
               Taller de desarrollo en sistemas, redes de datos, bases de datos y algoritmos.
             </div>
          </div>
          <div className="quest-item" style={{ borderColor: 'rgba(20, 253, 206, 0.5)' }}>
             <div className="quest-title">Curso: Learn Git & GitHub</div>
             <div className="quest-desc" style={{ marginTop: '0.5rem', fontSize: '1.15rem' }}>
               <strong>Codecademy (2026)</strong><br/><br/>
               Entrenamiento táctico sobre control de versiones, repositorios colaborativos y flujos de trabajo en equipo.
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
