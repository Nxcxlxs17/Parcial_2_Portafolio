import { Card, Form, Input, Button, message } from 'antd';
import { MailOutlined, SendOutlined } from '@ant-design/icons';
import TituloSeccion from '../atoms/TituloSeccion';

const { TextArea } = Input;

const ContactoSeccion = () => {
    const [form] = Form.useForm();

    const onFinish = () => {
        message.success('¡Mensaje enviado con éxito!');
        form.resetFields();
    };

    return (
        <section id="contacto" style={{ padding: '40px 20px', maxWidth: '700px', margin: '0 auto' }}>
            <TituloSeccion texto="Contacto" icono={<MailOutlined />} />
            <Card style={{ borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Nombre"
                        name="nombre"
                        rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                    >
                        <Input placeholder="Tu nombre" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Correo Electrónico"
                        name="email"
                        rules={[
                            { required: true, message: 'Por favor ingresa tu correo' },
                            { type: 'email', message: 'Ingresa un correo válido' },
                        ]}
                    >
                        <Input placeholder="tu.correo@ejemplo.com" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Mensaje"
                        name="mensaje"
                        rules={[{ required: true, message: 'Por favor escribe tu mensaje' }]}
                    >
                        <TextArea rows={4} placeholder="Escribe tu mensaje aquí..." />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                        <Button type="primary" htmlType="submit" icon={<SendOutlined />} size="large" block>
                            Enviar Mensaje
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </section>
    );
};

export default ContactoSeccion;