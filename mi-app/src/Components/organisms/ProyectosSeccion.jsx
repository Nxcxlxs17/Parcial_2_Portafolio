import { Row, Col, Card, Tag, Button, Typography, Space } from 'antd';
import { CodeOutlined, GithubOutlined, EyeOutlined } from '@ant-design/icons';
import TituloSeccion from '../atoms/TituloSeccion';

const { Title, Paragraph } = Typography;

const ProyectosSeccion = ({ proyectos = [] }) => {
    return (
        <section id="proyectos" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <TituloSeccion texto="Mis Proyectos" icono={<CodeOutlined />} />

            <Row gutter={[24, 24]}>
                {proyectos.map((proyecto) => (
                    <Col xs={24} sm={12} key={proyecto.id}>
                        <Card
                            hoverable
                            style={{
                                height: '100%',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                            }}
                            cover={
                                proyecto.imagen ? (
                                    <img
                                        alt={proyecto.titulo}
                                        src={proyecto.imagen}
                                        style={{
                                            height: '180px',
                                            objectFit: 'cover',
                                            borderTopLeftRadius: '16px',
                                            borderTopRightRadius: '16px',
                                        }}
                                    />
                                ) : null
                            }
                        >
                            <div style={{ flex: 1 }}>
                                <Title level={4} style={{ marginBottom: '8px' }}>
                                    {proyecto.titulo}
                                </Title>
                                <Paragraph type="secondary" style={{ marginBottom: '16px' }}>
                                    {proyecto.descripcion}
                                </Paragraph>

                                {proyecto.tags && (
                                    <div style={{ marginBottom: '16px' }}>
                                        {proyecto.tags.split(',').map((tag, index) => (
                                            <Tag color="blue" key={index} style={{ marginBottom: '4px' }}>
                                                {tag.trim()}
                                            </Tag>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Space wrap>
                                {proyecto.github && (
                                    <Button
                                        icon={<GithubOutlined />}
                                        href={proyecto.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Código
                                    </Button>
                                )}
                                {proyecto.demo && (
                                    <Button
                                        type="primary"
                                        icon={<EyeOutlined />}
                                        href={proyecto.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ver Demo
                                    </Button>
                                )}
                            </Space>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default ProyectosSeccion;