import { useState } from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Perfil } from './components/Perfil';

function App() {
  const [activeTab, setActiveTab] = useState('cv');

  return (
    // Agregamos bg-dark y text-white para ver todo el contenido
    <div className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-between">
      <Navbar activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab)} />

      <main className="container my-4">
        <Perfil />
      </main>

      <Footer />
    </div>
  );
}

export default App;