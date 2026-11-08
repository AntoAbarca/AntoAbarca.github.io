import { useState } from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Perfil } from './components/Perfil';
import { Curriculum } from './components/Curriculum';
import { Contacto } from './components/Contacto';

function App() {
  const [activeTab, setActiveTab] = useState('cv');

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab)} />

      <main className="container my-4 flex-grow-1">
        <Perfil onNavigateToContact={() => setActiveTab('contacto')} />

        {activeTab === 'cv' && <Curriculum />}
        {activeTab === 'contacto' && <Contacto />}
      </main>
      <Footer />
    </div>
  );
}

export default App;