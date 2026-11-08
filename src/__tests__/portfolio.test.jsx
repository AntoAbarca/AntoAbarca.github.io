import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Perfil } from '../components/Perfil';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';

describe('Suite de Pruebas del Portafolio', () => {

  test('1. Navbar: Ejecuta onTabChange con el parámetro correcto al hacer clic', () => {
    const handleTabChange = vi.fn();
    render(<Navbar activeTab="cv" onTabChange={handleTabChange} theme="dark" />);
    
    const contactoBtn = screen.getByRole('button', { name: /Contacto/i });
    fireEvent.click(contactoBtn);
    
    expect(handleTabChange).toHaveBeenCalledWith('contacto');
  });

  test('2. Navbar: Aplica la clase activa al botón de la pestaña seleccionada', () => {
    render(<Navbar activeTab="cv" onTabChange={() => {}} theme="dark" />);
    const cvBtn = screen.getByRole('button', { name: /Currículum/i });
    expect(cvBtn).toHaveClass('btn-light');
  });

  test('3. Footer: Renderiza correctamente el texto de copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/2026 - Creado con HTML, CSS/i)).toBeInTheDocument();
  });

  test('4. Perfil: Muestra la información básica del usuario', () => {
    render(<Perfil />);
    expect(screen.getByText(/Antonia Abarca Bustos/i)).toBeInTheDocument();
    expect(screen.getByText(/Estudiante de Ingeniería Informática/i)).toBeInTheDocument();
  });

  test('5. Perfil: Dispara la navegación hacia contacto al presionar el botón Formulario', () => {
    const handleNavigate = vi.fn();
    render(<Perfil onNavigateToContact={handleNavigate} />);
    
    const btnContacto = screen.getByRole('button', { name: /Contacto/i });
    fireEvent.click(btnContacto);
    
    expect(handleNavigate).toHaveBeenCalledTimes(1);
    });

  test('6. Curriculum: Renderiza los títulos principales de Educación y Proyectos', () => {
    render(<Curriculum />);
    expect(screen.getByRole('heading', { name: /Educación/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Proyectos/i })).toBeInTheDocument();
  });

  test('7. Contacto: Muestra mensajes de error si se intenta enviar el formulario vacío', () => {
    render(<Contacto />);
    const submitBtn = screen.getByRole('button', { name: /Enviar Mensaje/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/El nombre es obligatorio/i)).toBeInTheDocument();
    expect(screen.getByText(/El correo electrónico es obligatorio/i)).toBeInTheDocument();
  });

  test('8. Contacto: Rechaza nombres que contengan números', () => {
    render(<Contacto />);
    const nombreInput = screen.getByLabelText(/Nombre completo/i);
    const submitBtn = screen.getByRole('button', { name: /Enviar Mensaje/i });

    fireEvent.change(nombreInput, { target: { value: 'Antonia 123' } });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/El nombre solo puede contener letras/i)).toBeInTheDocument();
  });

  test('9. Contacto: Muestra error si el asunto contiene solo números', () => {
    render(<Contacto />);
    const asuntoInput = screen.getByLabelText(/Asunto/i);
    const submitBtn = screen.getByRole('button', { name: /Enviar Mensaje/i });

    fireEvent.change(asuntoInput, { target: { value: '987654' } });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/El asunto no puede estar compuesto únicamente por números/i)).toBeInTheDocument();
  });

  test('10. Contacto: Permite el envío y muestra mensaje de éxito con datos válidos', async () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText(/Nombre completo/i), { target: { value: 'Antonia Abarca' } });
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), { target: { value: 'antonia@ejemplo.com' } });
    fireEvent.change(screen.getByLabelText(/Asunto/i), { target: { value: 'Consulta de Trabajo' } });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Mensaje de prueba con más de diez caracteres requeridos.' } });

    const submitBtn = screen.getByRole('button', { name: /Enviar Mensaje/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/¡Gracias por tu mensaje!/i)).toBeInTheDocument();
  });

});