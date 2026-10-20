import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TituloSeccion from './TituloSeccion';

describe('TituloSeccion', () => {
    it('debe mostrar el texto recibido como título', () => {
        render(<TituloSeccion texto="Mis Proyectos" />);
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Mis Proyectos');
    });

    it('debe mostrar el icono cuando se envía', () => {
        render(<TituloSeccion texto="Estudios" icono={<span data-testid="icono" />} />);
        expect(screen.getByTestId('icono')).toBeInTheDocument();
    });
});