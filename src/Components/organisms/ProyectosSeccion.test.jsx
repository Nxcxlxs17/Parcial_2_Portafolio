import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProyectosSeccion from './ProyectosSeccion.jsx';

describe('ProyectosSeccion', () => {
    it('debe mostrar el título de la sección', () => {
        // ARRANGE & ACT
        render(<ProyectosSeccion />);

        // ASSERT
        expect(screen.getByText('Mis Proyectos')).toBeInTheDocument();
    });

    it('debe renderizar los proyectos con sus detalles, etiquetas y enlaces', () => {
        // ARRANGE: Mock con array de tags y enlaces de GitHub/Demo
        const proyectosMock = [
            {
                id: 1,
                titulo: 'E-commerce App',
                descripcion: 'Una tienda en línea interactiva.',
                imagen: 'https://via.placeholder.com/180',
                tags: ['React', 'Ant Design'],
                github: 'https://github.com/ejemplo/ecommerce',
                demo: 'https://ecommerce-demo.com',
            },
        ];

        // ACT
        render(<ProyectosSeccion proyectos={proyectosMock} />);

        // ASSERT
        expect(screen.getByText('E-commerce App')).toBeInTheDocument();
        expect(screen.getByText('Una tienda en línea interactiva.')).toBeInTheDocument();

        // Verificar etiquetas
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Ant Design')).toBeInTheDocument();

        // Verificar botones y sus URLs de destino
        const botonCodigo = screen.getByRole('link', { name: /Código/i });
        const botonDemo = screen.getByRole('link', { name: /Ver Demo/i });

        expect(botonCodigo).toHaveAttribute('href', 'https://github.com/ejemplo/ecommerce');
        expect(botonDemo).toHaveAttribute('href', 'https://ecommerce-demo.com');
    });

    it('debe procesar correctamente cuando las etiquetas vienen en un string separado por comas', () => {
        // ARRANGE: Mock con string en tags
        const proyectosMock = [
            {
                id: 2,
                titulo: 'Portafolio Web',
                descripcion: 'Sitio personal.',
                tags: 'HTML, CSS, JavaScript',
            },
        ];

        // ACT
        render(<ProyectosSeccion proyectos={proyectosMock} />);

        // ASSERT
        expect(screen.getByText('HTML')).toBeInTheDocument();
        expect(screen.getByText('CSS')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
    });
});