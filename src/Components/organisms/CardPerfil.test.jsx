import {render, screen} from "@testing-library/react";
import {describe, it, expect} from "vitest";
import CardPerfil from "./CardPerfil.jsx";
import {personalData, redesData} from "../../data/portafolioData.js";


describe('Componente CardPerfil', () => {
    it('debe cargar los datos de la card', () => {
        render (
            <CardPerfil
                personal={personalData}
                social={redesData}
            />
        );
        expect(screen.getByText('¡Hola! Soy')).toBeInTheDocument();
        expect (screen.getByText(personalData.nombre)).toBeInTheDocument();
        expect (screen.getByText(personalData.titulo.trim())).toBeInTheDocument();
        expect (screen.getByText(personalData.descripcion)).toBeInTheDocument();
    });

    it('debe mostrar los botones de contacto y redes sociales', () => {
        render(
            <CardPerfil
            personal={personalData}
            social={redesData}
            />
        );

        expect(screen.getByRole('link', { name: /LinkedIn/ })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /GitHub/ })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Contactar/ })).toBeInTheDocument();

    });
});