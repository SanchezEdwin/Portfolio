import { useState } from 'react';
import './components.css';
import { playTabSound } from '../utils';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import houseIcon from '../assets/house.png';

// Custom house icon for the map marker
const homeIcon = new L.Icon({
  iconUrl: houseIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Component to dynamically update map center and zoom when tab changes
function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function MapPage() {
  const [subTab, setSubTab] = useState('LOCAL MAP');

  const handleTabClick = (tab: string) => {
    playTabSound();
    setSubTab(tab);
  };

  const localCoords: [number, number] = [26.01475, -98.24739]; // Esquina Calle Onix / 20 de Noviembre, Reynosa
  const worldCoords: [number, number] = [26.0806, -98.2883]; // Reynosa center

  const currentCoords = subTab === 'LOCAL MAP' ? localCoords : worldCoords;
  const currentZoom = subTab === 'LOCAL MAP' ? 16 : 11;

  return (
    <div className="page-container">
      <div className="sub-nav">
        <button className={`sub-nav-btn ${subTab === 'LOCAL MAP' ? 'active' : ''}`} onClick={() => handleTabClick('LOCAL MAP')}>LOCAL MAP</button>
        <button className={`sub-nav-btn ${subTab === 'WORLD MAP' ? 'active' : ''}`} onClick={() => handleTabClick('WORLD MAP')}>WORLD MAP</button>
      </div>

      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <h2>{subTab === 'LOCAL MAP' ? 'UBICACIÓN ACTUAL: CALLE ONIX #100, LA JOYA' : 'UBICACIÓN ACTUAL: REYNOSA, TAMAULIPAS, MÉXICO'}</h2>
      </div>

      <div className="pip-map-container">
        <MapContainer 
          center={currentCoords} 
          zoom={currentZoom} 
          style={{ height: '100%', width: '100%', background: '#000' }}
          zoomControl={false}
          attributionControl={false}
        >
          <ChangeView center={currentCoords} zoom={currentZoom} />
          {/* Base map without labels. CartoDB has full coverage. Will be tinted green via CSS. */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
            className="pip-map-base"
          />
          {/* Labels only map. Will remain white via CSS. */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
            className="pip-map-labels"
          />
          <Marker position={localCoords} icon={homeIcon}>
            <Popup>
              [ YOU ]<br/>Calle Onix #100
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1.4rem' }}>
        <p> <strong>Frecuencia de Contacto:</strong> +52 899-418-3998</p>
        <p> <strong>Enlace de Datos:</strong> sanchezescandonedwin@gmail.com</p>
      </div>
    </div>
  );
}
