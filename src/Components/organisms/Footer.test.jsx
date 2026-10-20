import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
    it('debe mostrar el año actual y los derechos', () => {
        render(<Footer nombre="Nicolas" email="nico@correo.cl" />);
        expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
        expect(screen.getByText(/Todos los derechos reservados/)).toBeInTheDocument();
    });

    it('debe mostrar el correo de contacto', () => {
        render(<Footer nombre="Nicolas" email="nico@correo.cl" />);
        expect(screen.getByText('nico@correo.cl')).toBeInTheDocument();
    });
});