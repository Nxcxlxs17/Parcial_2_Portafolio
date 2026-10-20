import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer = ({ nombre = 'Mi Portafolio', email }) => {
    const anio = new Date().getFullYear();

    return (
        <AntFooter style={{ textAlign: 'center', backgroundColor: '#001529' }}>
            <Text style={{ color: '#fff' }}>
                © {anio} {nombre} - Todos los derechos reservados.
            </Text>
            <br />
            {email && <Link href={`mailto:${email}`}>{email}</Link>}
        </AntFooter>
    );
};

export default Footer;