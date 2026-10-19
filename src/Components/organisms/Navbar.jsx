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
        <Header className="navbar" style={{ display: 'flex', alignItems:'center' ,justifyContent: 'center', backgroundColor: '#001529' }}>
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
            </div>

            <Menu
                className='navbar-menu'
                theme="dark"
                mode="horizontal"
                items={menuItems}
                onClick={handleScroll}
                style={{ flex:1, minWidth: 0, display:'flex', justifyContent:'center'}}
            />
        </Header>
    );
};

export default Navbar;