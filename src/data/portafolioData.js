import imagen from "../assets/computer-user.png";
import imagen_avy from "../assets/imagen_avy.jpg";
import logoPUMBA3 from "../assets/logoPUMBA3.png";

export const personalData = {
    nombre: "Nicolas Sobarzo",
    titulo: "Desarrollador Full Stack ",
    descripcion: 'Estudiante de Analista Programador en Duoc UC y desarrollador Front-End y Back-End. Destaco por mi responsabilidad, puntualidad y capacidad para trabajar en equipo.',
    avatar: imagen
};

export const profesionalData = [
    {
        id:1,
        empresa: 'LQV ',
        cargo: 'Operario de Bodega',
        fechaInicio: 'Junio 2025',
        fechaTermino: 'Julio 2025',
        descripcion:'Picker'
    },
    {
        id:2,
        empresa: 'Avymaq ',
        cargo: 'Vendedor Online',
        fechaInicio: 'Marzo 2025',
        fechaTermino: 'Presente',
        descripcion:'Vender productos del hogat en marketplace'
    },
    {
        id:3,
        empresa: 'Minimarket',
        cargo: 'Cajero',
        fechaInicio: 'Agosto 2025',
        fechaTermino: 'Diciembre 2025',
        descripcion:'Cajero en un Minimarket'
    }
]

export const estudiosData = [
    {
        id:1,
        institucion: 'Duoc Uc',
        titulo: 'Analista Programador',
        anio: '2024 - Presente'
    },
    {
        id:2,
        institucion: 'Instituo Cristiano Luis Gandarillas',
        titulo: 'Enseñanza Media',
        anio: '2020 - 2023'
    },
    {
        id:3,
        institucion: 'Colegio Alfarero',
        titulo: 'Enseñanza Básica',
        anio: '2012 - 2019'
    }
]

export const proyectosData = [
    {
      id:1,
      titulo:'HomeCatalogue',
      github:'https://github.com/NicolaiX9/homecatalogue---moya---sobarzo---011D/tree/ExamBranch',
      descripcion:'Desarrollo de Back-End de una tienda de articulos para el hogar.',
      imagen:imagen_avy,
      categoria:'Tienda de Articulos del Hogar',
      tags:'Java, Spring Boot, Back-End',
    },
    {
        id:2,
        titulo:'PUMBA',
        descripcion:'Desarrollo de back-End de una tienda de Zapatillas',
        imagen: logoPUMBA3,
        categoria:'Sitio para una Empresa de Zapatillas',
        tags:'Java, MySQL, XAMPP',
    }
];


export const redesData = {
    linkedin:'https://www.linkedin.com/in/nicolas-sobarzo-014a90335/?isSelfProfile=true',
    github:'https://github.com/Nxcxlxs17',
    email:'nico.sobarzo@duocuc.cl'
};

