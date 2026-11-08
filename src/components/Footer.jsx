import React from 'react';

export const Footer = () => {
  return (
    <footer 
      className="py-3 mt-auto border-top border-secondary border-opacity-25 text-center text-white-50"
      style={{ backgroundColor: '#212d3a' }}
    >
      <div className="container">
        <small className="mb-0">
          &copy; 2026 - Creado con HTML, CSS, Bootstrap y React en JSX
        </small>
      </div>
    </footer>
  );
};