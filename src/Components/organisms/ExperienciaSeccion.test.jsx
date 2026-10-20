import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExperienciaSeccion from './ExperienciaSeccion.jsx';

describe('ExperienciaSeccion', () => {
    it('debe mostrar el título de la sección', () => {
        render(<ExperienciaSeccion />);

        expect(screen.getByText('Experiencia Laboral')).toBeInTheDocument();
    });

    it('debe mostrar la lista de experiencias profesionales con todos sus datos', () => {
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

        render(<ExperienciaSeccion profesional={profesionalMock} />);

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

        render(<ExperienciaSeccion profesional={profesionalMock} />);

        expect(screen.getByText('Analista QA')).toBeInTheDocument();
        expect(screen.getByText('Testing Lab')).toBeInTheDocument();
        expect(screen.getByText('2020 - 2021')).toBeInTheDocument();
    });
});