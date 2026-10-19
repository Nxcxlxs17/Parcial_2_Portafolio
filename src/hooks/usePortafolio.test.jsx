import {renderHook} from '@testing-library/react';
import {describe, it, expect} from "vitest";
import {usePortafolio} from './usePortafolio.js';
import {estudiosData, personalData, profesionalData, proyectosData, redesData} from "../data/portafolioData.js";


describe('Probar el usePortafolio', () => {
    it('debe cargar los datos del portafolio', () => {

        const {result} = renderHook(() => usePortafolio());

        expect(result.current.data.personal).toEqual(personalData);
        expect(result.current.data.profesional).toEqual(profesionalData);
        expect(result.current.data.estudios).toEqual(estudiosData);
        expect(result.current.data.proyectos).toEqual(proyectosData);
        expect(result.current.data.social).toEqual(redesData);
    });
});