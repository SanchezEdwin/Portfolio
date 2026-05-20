import { useState } from 'react';
import './components.css';
import { playTabSound } from '../utils';

type Item = { name: string; weight: number; val: number; desc: string; dmg?: string; def?: string };

const INVENTORY: Record<string, Item[]> = {
  WEAPONS: [
    { name: 'Windows Server Support', weight: 2.5, val: 450, dmg: '90', desc: 'Mantenimiento de infraestructura de servidores principales, soporte a Active Directory, perfiles de usuario y esquemas de respaldo/recuperación.' },
    { name: 'Active Directory', weight: 1.5, val: 380, dmg: '85', desc: 'Gestión centralizada de identidades de red, control de accesos, políticas de grupo y auditoría de permisos corporativos.' },
    { name: 'LAN / Wi-Fi Troubleshooting', weight: 2.0, val: 350, dmg: '80', desc: 'Diagnóstico y resolución de fallas en redes de datos, incluyendo switches, direccionamiento IP (DHCP/DNS), VLANs y cableado estructurado.' },
    { name: 'CCTV Surveillance', weight: 3.0, val: 280, dmg: '75', desc: 'Instalación, configuración y mantenimiento de sistemas de seguridad analógicos e IP (DVR/NVR), cableado y almacenamiento.' },
    { name: 'Endpoint Configuration', weight: 1.8, val: 220, dmg: '70', desc: 'Preparación, configuración, clonación (SCCM/Imaging) y puesta en marcha de estaciones de trabajo Windows administrativas y operativas.' }
  ],
  APPAREL: [
    { name: 'Python', weight: 0.5, val: 500, def: '95', desc: 'Habilidad principal de automatización. Procesamiento de datos (Pandas/NumPy), desarrollo de interfaces de usuario (PyQt6) y scripts utilitarios.' },
    { name: 'C# / C++ / C', weight: 2.0, val: 450, def: '90', desc: 'Dominio de lenguajes compilados orientados a objetos y estructuras de datos lógicas de nivel medio-bajo.' },
    { name: 'PowerShell & Batch', weight: 0.3, val: 250, def: '85', desc: 'Scripts para automatización de endpoints de usuario, configuración de dominio y despliegues rápidos en Windows.' },
    { name: 'SQL (MySQL/SQL Server/SQLite/Oracle)', weight: 1.5, val: 420, def: '90', desc: 'Modelado relacional, consultas avanzadas, automatización de disparadores y administración segura de datos.' },
    { name: 'PowerApps & SharePoint', weight: 1.0, val: 350, def: '80', desc: 'Construcción ágil de aplicaciones corporativas de inventario y listas dinámicas de SharePoint.' },
    { name: 'VBA & MS Access', weight: 1.2, val: 300, def: '75', desc: 'Desarrollo de bases de datos locales rápidas y automatizaciones para eficiencias en herramientas heredadas.' }
  ]
};

export default function InvPage() {
  const [subTab, setSubTab] = useState('WEAPONS');
  const [activeItem, setActiveItem] = useState<Item | null>(INVENTORY['WEAPONS'][0]);

  const handleTabClick = (tab: string) => {
    playTabSound();
    setSubTab(tab);
    setActiveItem(INVENTORY[tab][0]);
  };

  const items = INVENTORY[subTab] || [];

  return (
    <div className="page-container">
      <div className="sub-nav">
        <button className={`sub-nav-btn ${subTab === 'WEAPONS' ? 'active' : ''}`} onClick={() => handleTabClick('WEAPONS')}>WEAPONS (SYS & NET)</button>
        <button className={`sub-nav-btn ${subTab === 'APPAREL' ? 'active' : ''}`} onClick={() => handleTabClick('APPAREL')}>APPAREL (DEV & DATA)</button>
      </div>

      <div className="inv-layout">
        <div className="inv-list">
          {items.map((item) => (
            <div 
              key={item.name} 
              className={`inv-item ${activeItem?.name === item.name ? 'active' : ''}`}
              onClick={() => setActiveItem(item)}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        
        <div className="inv-details">
          {activeItem ? (
             <>
               <h2>{activeItem.name}</h2>
               <div className="flex-row" style={{ borderBottom: '1px solid var(--pipboy-green)', paddingBottom: '0.5rem', marginBottom: '1rem', opacity: 0.8 }}>
                 {activeItem.dmg && <span>DMG {activeItem.dmg}</span>}
                 {activeItem.def && <span>DR {activeItem.def}</span>}
                 <span>WG {activeItem.weight}</span>
                 <span>VAL {activeItem.val}</span>
               </div>
               <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
                 {activeItem.desc}
               </p>
             </>
          ) : (
            <p>Selecciona un objeto.</p>
          )}
        </div>
      </div>
    </div>
  );
}
