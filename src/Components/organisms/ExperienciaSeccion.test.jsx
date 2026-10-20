import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExperienciaSeccion from './ExperienciaSeccion.jsx';

describe('ExperienciaSeccion', () => {
    it('debe mostrar el título de la sección', () => {
        // ARRANGE & ACT: Renderizamos el componente sin props
        render(<ExperienciaSeccion />);

        // ASSERT: Comprobamos que el título principal exista en el documento
        expect(screen.getByText('Experiencia Laboral')).toBeInTheDocument();
    });

    it('debe mostrar la lista de experiencias profesionales con todos sus datos', () => {
        // ARRANGE: Datos de prueba (mock)
        const profesionalMock = [
            {
                id: 1,
                cargo: 'Desarrollador Frontend',
                empresa: 'Tech Solutions',
                fechaInicio: 'Enero 2022',
                fechaTermino: 'Presente',
                descripcion: 'Desarrollo de interfaces con React y Ant Design.',
            },
            {
                id: 2,
                cargo: 'Práctica Profesional',
                empresa: 'Software Factory',
                fechaInicio: 'Marzo 2021',
                fechaTermino: 'Diciembre 2021',
                descripcion: 'Mantenimiento de aplicaciones web.',
            },
        ];

        // ACT: Renderizamos pasando la lista de experiencias
        render(<ExperienciaSeccion profesional={profesionalMock} />);

        // ASSERT: Verificamos los textos del primer ítem
        expect(screen.getByText('Desarrollador Frontend')).toBeInTheDocument();
        expect(screen.getByText('Tech Solutions')).toBeInTheDocument();
        expect(screen.getByText('Enero 2022 - Presente')).toBeInTheDocument();
        expect(
            screen.getByText('Desarrollo de interfaces con React y Ant Design.')
        ).toBeInTheDocument();

        // ASSERT: Verificamos los textos del segundo ítem
        expect(screen.getByText('Práctica Profesional')).toBeInTheDocument();
        expect(screen.getByText('Software Factory')).toBeInTheDocument();
        expect(screen.getByText('Marzo 2021 - Diciembre 2021')).toBeInTheDocument();
        expect(
            screen.getByText('Mantenimiento de aplicaciones web.')
        ).toBeInTheDocument();
    });

    it('debe renderizar correctamente una experiencia aunque no contenga descripción', () => {
        // ARRANGE: Ítem opcional sin el campo descripcion
        const profesionalMock = [
            {
                id: 3,
                cargo: 'Analista QA',
                empresa: 'Testing Lab',
                fechaInicio: '2020',
                fechaTermino: '2021',
            },
        ];

        // ACT
        render(<ExperienciaSeccion profesional={profesionalMock} />);

        // ASSERT
        expect(screen.getByText('Analista QA')).toBeInTheDocument();
        expect(screen.getByText('Testing Lab')).toBeInTheDocument();
        expect(screen.getByText('2020 - 2021')).toBeInTheDocument();
    });
});