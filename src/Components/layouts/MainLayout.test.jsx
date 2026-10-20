import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MainLayout from './MainLayout';

describe('MainLayout', () => {
    it('debe renderizar el contenido que recibe como children', () => {
        render(
            <MainLayout nombre="Nicolas" email="nico@correo.cl">
                <p>Contenido de prueba</p>
            </MainLayout>,
        );
        expect(screen.getByText('Contenido de prueba')).toBeInTheDocument();
    });

    it('debe incluir la barra de navegación', () => {
        render(
            <MainLayout nombre="Nicolas" email="nico@correo.cl">
                <p>Contenido</p>
            </MainLayout>,
        );
        expect(screen.getAllByText('Proyectos').length).toBeGreaterThan(0);
    });

    it('debe incluir el footer con nombre y año actual', () => {
        render(
            <MainLayout nombre="Nicolas" email="nico@correo.cl">
                <p>Contenido</p>
            </MainLayout>,
        );
        expect(screen.getByText(/Nicolas/)).toBeInTheDocument();
        expect(
            screen.getByText(new RegExp(String(new Date().getFullYear()))),
        ).toBeInTheDocument();
    });

    it('debe mostrar el correo de contacto en el footer', () => {
        render(
            <MainLayout nombre="Nicolas" email="nico@correo.cl">
                <p>Contenido</p>
            </MainLayout>,
        );
        expect(screen.getByText('nico@correo.cl')).toBeInTheDocument();
    });
});