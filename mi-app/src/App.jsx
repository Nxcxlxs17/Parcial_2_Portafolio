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
    const anioFooter = new Date().getFullYear();

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', borderRadius: 8 }}>
            <Navbar style={{ backgroundColor: '#0f172a' }} />

            <Content style={{ padding: '40px 16px' }}>
                <CardPerfil personal={data?.personal} social={data?.social} />
                <ExperienciaSeccion profesional={data?.profesional} />
                <EstudiosSeccion estudios={data?.estudios} />
                <ProyectosSeccion proyectos={data?.proyectos} />
                <ContactoSeccion />
            </Content>

            <Footer style={{ textAlign: 'center', backgroundColor: '0f172a', color: '#ffffff' }}>
                © {anioFooter} {data?.personal?.nombre || 'Mi Portafolio'} - Todos los derechos reservados.
            </Footer>
        </Layout>
    );
}

export default App;