import { Layout } from 'antd';
import Navbar from '../organisms/Navbar.jsx';
import Footer from '../organisms/Footer.jsx';

const { Content } = Layout;

const MainLayout = ({ children, nombre, email }) => (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#E2E8F0' }}>
        <Navbar style={{ backgroundColor: '#001529' }} />
        <Content style={{ padding: '40px 16px' }}>{children}</Content>
        <Footer nombre={nombre} email={email} />
    </Layout>
);

export default MainLayout;