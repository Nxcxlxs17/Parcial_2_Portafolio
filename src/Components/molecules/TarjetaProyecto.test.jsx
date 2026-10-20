import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TarjetaProyecto from './TarjetaProyecto';

const proyecto = {
    id: 1,
    titulo: 'PUMBA',
    descripcion: 'Tienda de zapatillas',
    imagen: 'pumba.png',
    tags: 'Java, MySQL',
    github: 'https://github.com/usuario/pumba',
};

describe('TarjetaProyecto', () => {
    it('debe mostrar título y descripción', () => {
        render(<TarjetaProyecto proyecto={proyecto} />);

        expect(screen.getByText('PUMBA')).toBeInTheDocument();
        expect(screen.getByText('Tienda de zapatillas')).toBeInTheDocument();
    });

    it('debe mostrar cada tag por separado', () => {
        render(<TarjetaProyecto proyecto={proyecto} />);

        expect(screen.getByText('Java')).toBeInTheDocument();
        expect(screen.getByText('MySQL')).toBeInTheDocument();
    });

    it('debe mostrar la imagen con el título como texto alternativo', () => {
        render(<TarjetaProyecto proyecto={proyecto} />);

        expect(screen.getByAltText('PUMBA')).toBeInTheDocument();
    });

    it('debe enlazar al repositorio', () => {
        render(<TarjetaProyecto proyecto={proyecto} />);

        expect(screen.getByRole('link', { name: /Ver github/i })).toHaveAttribute(
            'href',
            'https://github.com/usuario/pumba',
        );
    });

    it('no debe mostrar el botón de código si no hay repositorio', () => {
        const sinRepo = { ...proyecto, github: undefined };

        render(<TarjetaProyecto proyecto={sinRepo} />);

        expect(
            screen.queryByRole('link', { name: /Ver github/i }),
        ).not.toBeInTheDocument();
    });
});