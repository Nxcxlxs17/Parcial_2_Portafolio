import {useState, useEffect, useCallback} from 'react';
import {
    personalData,
    profesionalData,
    estudiosData,
    proyectosData,
    redesData,
} from '../data/portafolioData.js';

export const usePortafolio = () => {
    const [data, setData] = useState({
        personal: null,
        profesional: [],
        estudios: [],
        proyectos: [],
        social: null,
    });

    const cargarDatos = useCallback(() => {
        setData({
            personal: personalData,
            profesional: profesionalData,
            estudios: estudiosData,
            proyectos: proyectosData,
            social: redesData,
        });
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        cargarDatos();
    }, [cargarDatos]);

    return { data };
};