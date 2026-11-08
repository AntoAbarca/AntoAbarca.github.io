import React from 'react';

export const Curriculum = () => {
  return (
    <div className="row">
      {/* Columna Izquierda */}
      <div className="col-12 col-md-4">
        
        {/*Sobre mí */}
        <div className="card-custom">
          <h2 className="section-title">Sobre mí</h2>
          <p className="mb-0 text-secondary">Persona viviente (por ahora).</p>
        </div>

        {/*Habilidades Técnicas */}
        <div className="card-custom">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-secondary">
            <li>
              <strong className="text-dark">Lenguajes:</strong> Python, Java.
            </li>
            <li>
              <strong className="text-dark">Bases de Datos:</strong> SQL, MySQL, Oracle.
            </li>
            <li>
              <strong className="text-dark">Herramientas:</strong> Git, Visual Studio Code.
            </li>
          </ul>
        </div>

      </div>

      {/* Columna Derecha*/}
      <div className="col-12 col-md-8">
        
        {/* Educación */}
        <div className="card-custom">
          <h2 className="section-title">Educación</h2>
          
          <div className="mb-3">
            <h5 className="fw-bold mb-1 fs-6">
              Colegio Madre de la Divina Providencia | <span className="fw-normal text-muted">2012 -- 2024</span>
            </h5>
            <p className="text-secondary mb-0">Educación básica y media.</p>
          </div>

          <hr className="custom-hr" />

          <div>
            <h5 className="fw-bold mb-1 fs-6">
              Instituto profesional Duoc UC | <span className="fw-normal text-muted">2025 -- En curso</span>
            </h5>
            <p className="text-secondary mb-0">
              Ingeniería en Informática mención Ciencia de datos.
            </p>
          </div>
        </div>

        {/*Proyectos */}
        <div className="card-custom">
          <h2 className="section-title">Proyectos</h2>
          
          {/* Proyecto 1 */}
          <div className="mb-3">
            <h5 className="fw-bold mb-1 fs-6">Curriculum Vitae</h5>
            <small className="text-muted d-block mb-1">HTML/JSX, CSS, Bootstrap</small>
            <p className="text-secondary mb-0">
              Diseño y desarrollo de una plataforma personal adaptable a dispositivos móviles y escritorio utilizando buenas prácticas de maquetación.
            </p>
          </div>

          <hr className="custom-hr" />

          {/* Proyecto 2 */}
          <div>
            <h5 className="fw-bold mb-1 fs-6">CrossMatch / Fullstack 1</h5>
            <small className="text-muted d-block mb-1">Java / Spring boot</small>
            <p className="text-secondary mb-0">
              CrossMatch es un trabajo actualmente en desarrollo para una página realizado en SpringBoot...
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};