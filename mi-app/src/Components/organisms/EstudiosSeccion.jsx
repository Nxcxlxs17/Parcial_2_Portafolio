import { Row, Col, Card, Typography } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import TituloSeccion from '../atoms/TituloSeccion';

const { Title, Text } = Typography;

const EstudiosSeccion = ({ estudios = [] }) => {
    return (
        <section id="estudios" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <TituloSeccion texto="Estudios y Formación" icono={<ReadOutlined />} />

            <Row gutter={[24, 24]}>
                {estudios.map((item) => (
                    <Col xs={24} sm={12} md={8} key={item.id}>
                        <Card
                            hoverable
                            style={{
                                height: '100%',
                                borderRadius: '16px',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Title level={4} style={{ marginBottom: '8px', color: '#1677ff' }}>
                                {item.titulo}
                            </Title>
                            <Text type="secondary" strong style={{ display: 'block', marginBottom: '4px' }}>
                                {item.institucion}
                            </Text>
                            <Text type="secondary" style={{ fontSize: '13px' }}>
                                {item.anio}
                            </Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default EstudiosSeccion;