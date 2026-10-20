import { usePortafolio } from '../hooks/usePortafolio.js';
import MainLayout from '../Components/layouts/MainLayout.jsx';
import CardPerfil from '../Components/organisms/CardPerfil.jsx';
import ExperienciaSeccion from '../Components/organisms/ExperienciaSeccion.jsx';
import EstudiosSeccion from '../Components/organisms/EstudiosSeccion.jsx';
import ProyectosSeccion from '../Components/organisms/ProyectosSeccion.jsx';
import { ContactoSeccion } from '../Components/organisms/ContactoSeccion.jsx';

const Home = () => {
    const { data } = usePortafolio();

    return (
        <MainLayout nombre={data.personal?.nombre} email={data.social?.email}>
            <CardPerfil personal={data.personal} social={data.social} />
            <ExperienciaSeccion profesional={data.profesional} />
            <EstudiosSeccion estudios={data.estudios} />
            <ProyectosSeccion proyectos={data.proyectos} />
            <ContactoSeccion />
        </MainLayout>
    );
};

export default Home;