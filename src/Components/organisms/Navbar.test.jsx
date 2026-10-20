import {fireEvent, render, screen} from '@testing-library/react';
import {describe, it, expect, vi} from "vitest";
import Navbar from "./Navbar.jsx";

describe('Navbar', () => {
    it('debe mostrar todas las opciones del menu', () => {
        render(<Navbar/>)

        expect(screen.getByText('Inicio')).toBeInTheDocument();
        expect(screen.getByText('Experiencia')).toBeInTheDocument();
        expect(screen.getByText('Estudios')).toBeInTheDocument();
        expect(screen.getByText('Proyectos')).toBeInTheDocument();
        expect(screen.getByText('Contacto')).toBeInTheDocument();
    });
    it('debe hacer scroll hacia la seccion correspondiente al hacer click', () =>{
        const scrollMock = vi.fn();
        const sectionMock = document.createElement('div');
        sectionMock.id = 'proyectos';
        sectionMock.scrollIntoView = scrollMock;
        document.body.appendChild(sectionMock);

        render(<Navbar/>)

        const opcionProyectos = screen.getByRole('menuitem', {name: /proyectos/i});
        fireEvent.click(opcionProyectos);

        expect(scrollMock).toHaveBeenCalledWith({behavior: 'smooth'});

        document.body.removeChild(sectionMock);
    });
});