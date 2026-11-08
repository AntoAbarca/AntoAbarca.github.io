import React, { useState } from 'react';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Función validaciones 
  const validarFormulario = () => {
    const nuevosErrores = {};

    const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    } else if (!regexSoloLetras.test(formData.nombre.trim())) {
      nuevosErrores.nombre = 'El nombre solo puede contener letras y espacios (sin números).';
    }

    const regexEmail = /\S+@\S+\.\S+/;
    if (!formData.email.trim()) {
      nuevosErrores.email = 'El correo electrónico es obligatorio.';
    } else if (!regexEmail.test(formData.email)) {
      nuevosErrores.email = 'Ingresa un correo electrónico válido.';
    }
    const regexSoloNumeros = /^\d+$/;
    if (!formData.asunto.trim()) {
      nuevosErrores.asunto = 'El asunto es obligatorio.';
    } else if (regexSoloNumeros.test(formData.asunto.trim())) {
      nuevosErrores.asunto = 'El asunto no puede estar compuesto únicamente por números.';
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';
    } else if (formData.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validarFormulario();

    if (Object.keys(erroresValidacion).length > 0) {
      setErrors(erroresValidacion);
    } else {
      setErrors({});
      setEnviado(true);
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8">
        <div className="card-custom">
          <h2 className="section-title">Formulario de Contacto</h2>

          {enviado && (
            <div className="alert alert-success alert-dismissible fade show mb-4" role="alert">
              ¡Gracias por tu mensaje! Me pondré en contacto contigo lo antes posible.
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setEnviado(false)}
                aria-label="Cerrar"
              ></button>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label fw-bold">Nombre completo</label>
              <input
                type="text"
                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Antonia Bustos"
              />
              {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nombre@ejemplo.com"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="asunto" className="form-label fw-bold">Asunto</label>
              <input
                type="text"
                className={`form-control ${errors.asunto ? 'is-invalid' : ''}`}
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                placeholder="Motivo del mensaje"
              />
              {errors.asunto && <div className="invalid-feedback">{errors.asunto}</div>}
            </div>

            <div className="mb-4">
              <label htmlFor="mensaje" className="form-label fw-bold">Mensaje</label>
              <textarea
                className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
              {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
            </div>

            <button type="submit" className="btn btn-primary px-4 rounded-pill fw-bold shadow-sm">
              Enviar Mensaje 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};