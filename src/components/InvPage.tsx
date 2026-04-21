import { useState } from 'react';
import './components.css';

type Item = { name: string; weight: number; val: number; desc: string; dmg?: string; def?: string };

const INVENTORY: Record<string, Item[]> = {
  WEAPONS: [
    { name: 'C#', weight: 1.5, val: 350, dmg: '95', desc: 'Arma pesada de alto rendimiento. Excelente para back-end y aplicaciones robustas.' },
    { name: 'C++', weight: 2.0, val: 400, dmg: '120', desc: 'Requiere gran habilidad, pero otorga control total sobre la memoria. Daño letal.' },
    { name: 'Python', weight: 0.8, val: 250, dmg: '85', desc: 'Rápida, versátil y letal en scripts y análisis de datos.' },
    { name: 'React', weight: 1.2, val: 300, dmg: '80', desc: 'Lanzador de componentes de alta cadencia para interfaces de usuario.' },
    { name: 'Batch', weight: 0.5, val: 50, dmg: '40', desc: 'Arma clásica de la vieja escuela para automatización en entornos Windows.' },
    { name: 'Powershell', weight: 1.0, val: 150, dmg: '75', desc: 'El rifle de francotirador de la administración de sistemas de Windows.' }
  ],
  APPAREL: [
    { name: 'MySQL', weight: 1.5, val: 200, def: '60', desc: 'Almacén seguro relacional. Protege tus datos como una armadura de combate.' },
    { name: 'SQL', weight: 1.0, val: 180, def: '50', desc: 'El lenguaje fundamental para consultar las bases de datos del Yermo.' },
    { name: 'Linux', weight: 2.0, val: 500, def: '90', desc: 'Sistema operativo resistente a la radiación. Altísima defensa si sabes configurarlo.' },
    { name: 'Git', weight: 0.5, val: 250, def: '99', desc: 'Seguro de vida contra código roto. Permite viajes en el tiempo (revert).' }
  ],
  MISC: [
    { name: 'Order Control', weight: 2.5, val: 1500, desc: 'Sistema integral desarrollado para gestión y control.' },
    { name: 'P1fiabook', weight: 1.8, val: 1200, desc: 'Proyecto clave en el inventario. Gran impacto y utilidad.' }
  ]
};

export default function InvPage() {
  const [subTab, setSubTab] = useState('WEAPONS');
  const [activeItem, setActiveItem] = useState<Item | null>(INVENTORY['WEAPONS'][0]);

  const items = INVENTORY[subTab] || [];

  return (
    <div className="page-container">
      <div className="sub-nav">
        <button className={`sub-nav-btn ${subTab === 'WEAPONS' ? 'active' : ''}`} onClick={() => { setSubTab('WEAPONS'); setActiveItem(INVENTORY['WEAPONS'][0]); }}>WEAPONS</button>
        <button className={`sub-nav-btn ${subTab === 'APPAREL' ? 'active' : ''}`} onClick={() => { setSubTab('APPAREL'); setActiveItem(INVENTORY['APPAREL'][0]); }}>APPAREL</button>
        <button className={`sub-nav-btn ${subTab === 'MISC' ? 'active' : ''}`} onClick={() => { setSubTab('MISC'); setActiveItem(INVENTORY['MISC'][0]); }}>MISC</button>
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
