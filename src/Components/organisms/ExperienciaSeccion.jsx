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
                        <Timeline.Item key={item.id} color="#36CFC9">
                            <Title level={4} style={{ margin: 0, color:'#001529' }}>
                                {item.cargo}
                            </Title>
                            <Text type="secondary" strong style={{color: '#1677FF'}}>
                                {item.empresa}
                            </Text>
                            <br />
                            <Text type="secondary" style={{ fontSize: '12px', color:'#647488' }}>
                                {item.fechaInicio} - {item.fechaTermino}
                            </Text>
                            {item.descripcion && (
                                <Paragraph style={{ marginTop: '8px', color:'#475569' }}>{item.descripcion}</Paragraph>
                            )}
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Card>
        </section>
    );
};

export default ExperienciaSeccion;