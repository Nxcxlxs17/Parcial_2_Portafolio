import {renderHook} from '@testing-library/react';
import {describe, it, expect} from "vitest";
import {usePortafolio} from './hooks/usePortafolio';


describe('Probar el usePortafolio', () => {
    it('debe retornar eñ estado inicial con los datos del portafolio', () => {
        const {result} = renderHook(() => usePortafolio());

        expect(result.current).toHaveProperty('data');
        expect(result.current.data).toHaveProperty('personal');

        expect(result.current.data.personal.nombre).toBe('Nicolas Sobarzo');
    });
});