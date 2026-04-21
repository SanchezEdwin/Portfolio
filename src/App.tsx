import { useState } from 'react';
import './App.css';

// Import components (we will create these next)
import StatPage from './components/StatPage';
import InvPage from './components/InvPage';
import DataPage from './components/DataPage';
import MapPage from './components/MapPage';
import RadioPage from './components/RadioPage';

type Tab = 'STAT' | 'INV' | 'DATA' | 'MAP' | 'RADIO';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('STAT');

  const renderContent = () => {
    switch (activeTab) {
      case 'STAT': return <StatPage />;
      case 'INV': return <InvPage />;
      case 'DATA': return <DataPage />;
      case 'MAP': return <MapPage />;
      case 'RADIO': return <RadioPage />;
      default: return <StatPage />;
    }
  };

  return (
    <>
      <div className="crt-overlay flicker"></div>
      <div className="scan-line-anim"></div>
      
      <div className="app-container">
        
        <header className="pip-header">
          <h1>ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM</h1>
          <div className="level-info">LVL 24</div>
        </header>

        <main className="pip-content">
          {renderContent()}
        </main>

        <nav className="pip-nav">
          {(['STAT', 'INV', 'DATA', 'MAP', 'RADIO'] as Tab[]).map((tab) => (
            <button
              key={tab}
              className={`nav-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

      </div>
    </>
  );
}

export default App;
