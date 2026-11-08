import { useState } from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Perfil } from './components/Perfil';
import { Curriculum } from './components/Curriculum';
import { Contacto } from './components/Contacto';

function App() {
  const [activeTab, setActiveTab] = useState('cv');
  const [theme, setTheme] = useState('dark');

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div 
      data-bs-theme={theme} 
      className={`d-flex flex-column min-vh-100 ${theme}`}
      style={{ backgroundColor: 'var(--body-bg)', color: 'var(--text-main)' }}
    >
      <Navbar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        theme={theme} 
        onToggleTheme={handleToggleTheme} 
      />

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