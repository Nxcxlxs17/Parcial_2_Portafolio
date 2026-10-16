import { Layout } from 'antd';
import { usePortafolio } from './hooks/usePortafolio.js';
import Navbar from './Components/organisms/Navbar';
import CardPerfil from './Components/organisms/CardPerfil';
import './App.css';
import ExperienciaSeccion from "./Components/organisms/ExperienciaSeccion.jsx";
import EstudiosSeccion from "./Components/organisms/EstudiosSeccion.jsx";
import ProyectosSeccion from "./Components/organisms/ProyectosSeccion.jsx";
import ContactoSeccion from "./Components/organisms/ContactoSeccion.jsx";

const { Content, Footer } = Layout;

function App() {
    const { data } = usePortafolio();
    const currentYear = new Date().getFullYear();


    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            <Navbar />

            <Content style={{ padding: '20px 0' }}>
                <CardPerfil personal={data?.personal} social={data?.social} />
                <ExperienciaSeccion profesional={data?.profesional} />
                <EstudiosSeccion estudios={data?.estudios} />
                <ProyectosSeccion proyectos={data?.proyectos} />
                <ContactoSeccion />
            </Content>

            <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#ffffff' }}>
                © {currentYear} {data?.personal?.nombre || 'Mi Portafolio'} - Todos los derechos reservados.
            </Footer>
        </Layout>
    );
}

export default App;