import EstudiosSeccion from "./EstudiosSeccion.jsx";
import {render, screen} from "@testing-library/react";
import {it, describe, expect} from "vitest";

describe('EstudiosSeccion', () => {
    it('debe mostrar el titulo de la seccion', () => {
        render(<EstudiosSeccion />);
        expect(screen.getByText('Estudios y Formación')).toBeInTheDocument();
    });
    it('debe mostrar la lista de estudios cuando se envían por props', () => {

        const estudiosMock = [
            {
                id: 1,
                titulo: 'Datos de Prueba 1',
                institucion: 'Duoc Uc - sede Maipu',
                anio: '2020 - 2024',
            },
            {
                id: 2,
                titulo: 'Datos de Prueba 2',
                institucion: 'Duoc Uc - sede Plaza Oeste',
                anio: '2023',
            },
        ];

        render(<EstudiosSeccion estudios={estudiosMock} />);

        expect(screen.getByText('Datos de Prueba 1')).toBeInTheDocument();
        expect(screen.getByText('Duoc Uc - sede Maipu')).toBeInTheDocument();
        expect(screen.getByText('2020 - 2024')).toBeInTheDocument();

        expect(screen.getByText('Datos de Prueba 2')).toBeInTheDocument();
        expect(screen.getByText('Duoc Uc - sede Plaza Oeste')).toBeInTheDocument();
        expect(screen.getByText('2023')).toBeInTheDocument();
    });

    it('debe renderizar la sección sin errores cuando la lista viene vacía', () => {
        render(<EstudiosSeccion estudios={[]} />);
        expect(screen.getByText('Estudios y Formación')).toBeInTheDocument();
    });


})