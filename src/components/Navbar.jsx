import React from 'react';

export const Navbar = ({ activeTab, onTabChange, theme, onToggleTheme }) => {
  return (
    <nav className="navbar navbar-expand navbar-dark py-2 border-bottom border-secondary border-opacity-25" style={{ backgroundColor: '#212d3a' }}>
      <div className="container">
        {/* Marca compacta */}
        <button
          type="button"
          onClick={() => onTabChange('cv')}
          className="navbar-brand mb-0 h6 fw-bold border-0 bg-transparent text-white p-0 d-flex align-items-center gap-2"
          style={{ cursor: 'pointer' }}
        >
        </button>

        {/* Pestañas de Navegación */}
        <div className="d-flex align-items-center ms-auto gap-2">
          <ul className="navbar-nav me-2 d-flex flex-row gap-1">
            <li className="nav-item">
              <button
                type="button"
                onClick={() => onTabChange('cv')}
                className={`btn btn-sm px-3 rounded-pill fw-medium border-0 ${
                  activeTab === 'cv'
                    ? 'btn-light text-dark fw-bold shadow-sm'
                    : 'btn-outline-light text-white-50'
                }`}
              >
                Currículum
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                onClick={() => onTabChange('contacto')}
                className={`btn btn-sm px-3 rounded-pill fw-medium border-0 ${
                  activeTab === 'contacto'
                    ? 'btn-light text-dark fw-bold shadow-sm'
                    : 'btn-outline-light text-white-50'
                }`}
              >
                Contacto
              </button>
            </li>
          </ul>

          {/* Botón de tema claro / oscuro */}
          <button
            id="btn-theme"
            onClick={onToggleTheme}
            type="button"
            className="btn btn-outline-light btn-sm rounded-pill px-2.5 shadow-sm"
            title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
            aria-label={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
          >
            {theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
          </button>
        </div>
      </div>
    </nav>
  );
};