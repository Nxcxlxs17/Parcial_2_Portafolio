import { Card, Timeline, Typography } from 'antd';
import { SolutionOutlined } from '@ant-design/icons';
import TituloSeccion from '../atoms/TituloSeccion.jsx';

const { Text, Paragraph, Title } = Typography;

const ExperienciaSeccion = ({ profesional = [] }) => {
    return (
        <section id="experiencia" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <TituloSeccion texto="Experiencia Laboral" icono={<SolutionOutlined />} />
            <Card style={{ borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                <Timeline mode="left">
                    {profesional.map((item) => (
                        <Timeline.Item key={item.id} color="#1677ff">
                            <Title level={4} style={{ margin: 0 }}>
                                {item.cargo}
                            </Title>
                            <Text type="secondary" strong>
                                {item.empresa}
                            </Text>
                            <br />
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                                {item.fechaInicio} - {item.fechaTermino}
                            </Text>
                            {item.descripcion && (
                                <Paragraph style={{ marginTop: '8px' }}>{item.descripcion}</Paragraph>
                            )}
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Card>
        </section>
    );
};

export default ExperienciaSeccion;