import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navbar = () => {
    const menuItems = [
        { key: 'personal', label: 'Inicio' },
        { key: 'experiencia', label: 'Experiencia' },
        { key: 'estudios', label: 'Estudios' },
        { key: 'proyectos', label: 'Proyectos' },
        { key: 'contacto', label: 'Contacto' },
    ];

    const handleScroll = (e) => {
        const sectionElement = document.getElementById(e.key);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#001529' }}>
            <div
                style={{
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginRight: '32px',
                    cursor: 'pointer',
                }}
                onClick={() => handleScroll({ key: 'personal' })}
            >
                MiPortafolio
            </div>

            <Menu
                theme="dark"
                mode="horizontal"
                items={menuItems}
                onClick={handleScroll}
                style={{ flex: 1, minWidth: 0 }}
            />
        </Header>
    );
};

export default Navbar;