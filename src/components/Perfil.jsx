import React, { useState } from 'react';
import fotoPerfil from '../assets/atom.jpg';

export const Perfil = ({ onNavigateToContact }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <header className="header-profile">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-12 col-md-3 text-center text-md-start mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
            {!imgError ? (
              <img
                src={fotoPerfil}
                alt="Foto de perfil de Antonia Abarca"
                onError={() => setImgError(true)}
                className="profile-img"
              />
            ) : (
              <div className="profile-img d-flex flex-column align-items-center justify-content-center bg-primary text-white fw-bold">
                <span className="fs-3">AB</span>
                <small className="text-white-50" style={{ fontSize: '0.7rem' }}>
                  Dev & Data
                </small>
              </div>
            )}
          </div>

          {/* Información personal */}
          <div className="col-12 col-md-9 text-center text-md-start">
            <h1 className="fw-bold mb-1 text-white">Antonia Abarca Bustos</h1>
            <p className="lead mb-2 text-white-50">
              Estudiante de Ingeniería Informática mención Ciencia de datos
            </p>

            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-2 mt-3">
              <span className="text-white-50">|</span>
              
              <a
                href="mailto:an.abarcab@duocuc.cl"
                className="btn btn-sm btn-correo-oscuro fw-bold px-3 rounded-pill shadow-sm"
              >
                Correo
              </a>

              <span className="text-white-50">|</span>

              <a
                href="https://github.com/AntoAbarca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-light fw-bold text-dark px-3 rounded-pill shadow-sm"
              >
                GitHub
              </a>

              <span className="text-white-50">|</span>

              {onNavigateToContact && (
                <>
                  <button
                    type="button"
                    onClick={onNavigateToContact}
                    className="btn btn-sm btn-outline-light rounded-pill px-3 shadow-sm"
                  >
                    Formulario ✉️
                  </button>
                  <span className="text-white-50">|</span>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};