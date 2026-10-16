import { useState, useEffect } from 'react';
import {
    personalData,
    profesionalData,
    estudiosData,
    proyectosData,
    redesData,
} from '../data/portafolioData';

export const usePortafolio = () => {
    const [data, setData] = useState({
        personal: null,
        profesional: [],
        estudios: [],
        proyectos: [],
        social: null,
    });

    useEffect(() => {
        setData({
            personal: personalData,
            profesional: profesionalData,
            estudios: estudiosData,
            proyectos: proyectosData,
            social: redesData,
        });
    }, []);

    return { data };
};