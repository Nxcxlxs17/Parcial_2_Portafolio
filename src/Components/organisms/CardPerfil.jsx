import { Card, Row, Col, Typography, Button, Space } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import UsuarioAvatar from '../atoms/UsuarioAvatar.jsx';

const { Title, Paragraph, Text } = Typography;

const CardPerfil = ({ personal, social }) => {
    if (!personal) return null;

    return (
        <section id="personal" style={{ padding: '40px 20px' }}>
            <Card
                hoverable
                style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                }}
            >
                <Row gutter={[32, 32]} align="middle">
                    <Col xs={24} md={8} style={{ textAlign: 'center' }}>
                        <UsuarioAvatar imagen={personal.avatar} tamano={180} />
                    </Col>

                    <Col xs={24} md={16}>
                        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
                            <div>
                                <Text type="secondary" style={{ fontSize: '16px', fontWeight: 600 }}>
                                    ¡Hola! Soy
                                </Text>
                                <Title level={1} style={{ margin: '4px 0', color: '#1677ff' }}>
                                    {personal.nombre}
                                </Title>
                                <Title level={3} type="secondary" style={{ marginTop: 0 }}>
                                    {personal.titulo}
                                </Title>
                            </div>

                            <Paragraph style={{ fontSize: '16px', color: '#595959' }}>
                                {personal.descripcion}
                            </Paragraph>

                            <Space wrap size="middle">
                                <Button
                                    type="primary"
                                    icon={<LinkedinOutlined />}
                                    size="large"
                                    href={social?.linkedin || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{borderColor: '#1677FF'}}
                                >
                                    LinkedIn
                                </Button>

                                <Button
                                    icon={<GithubOutlined />}
                                    size="large"
                                    href={social?.github || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{borderColor: '#1677FF', color: '#1677FF'}}
                                >
                                    GitHub
                                </Button>

                                <Button
                                    type="dashed"
                                    icon={<MailOutlined />}
                                    size="large"
                                    style={{backgroundColor: '#69B1FF'}}
                                    onClick={() => {
                                        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Contactar
                                </Button>
                            </Space>
                        </Space>
                    </Col>
                </Row>
            </Card>
        </section>
    );
};

export default CardPerfil;