import React from 'react';
import { render } from '@testing-library/react';
import Portfolio from './Portfolio';

describe('Validaciones del portafolio personal', () => {
  test('Los datos personales incluyen fotografía, teléfono y nombre completo', () => {
    // Renderizamos el componente y buscamos los datos
    const { getByAltText, getByText } = render(<Portfolio />);
    // Fotografía
    const foto = getByAltText(/foto/i);
    expect(foto).toBeInTheDocument();
    expect(foto.src).toMatch(/\.(jpg|jpeg|png|gif)$/);
    // Teléfono
    expect(getByText(/\+34 600 123 456/)).toBeInTheDocument();
    // Nombre completo
    expect(getByText(/Juan Pérez/)).toBeInTheDocument();
  });

  test('El listado de habilidades tiene al menos 5 elementos', () => {
    const { getAllByTestId } = render(<Portfolio />);
    const habilidades = getAllByTestId('habilidad');
    expect(habilidades.length).toBeGreaterThanOrEqual(5);
  });

  test('El listado de proyectos tiene al menos 3 elementos', () => {
    const { getAllByTestId } = render(<Portfolio />);
    const proyectos = getAllByTestId('proyecto');
    expect(proyectos.length).toBeGreaterThanOrEqual(3);
  });
});