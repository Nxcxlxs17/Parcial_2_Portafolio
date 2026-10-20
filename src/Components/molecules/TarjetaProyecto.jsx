import { Card, Tag } from 'antd';

const TarjetaProyecto = ({ proyecto }) => {
    const { titulo, descripcion, imagen, github, tags } = proyecto;

    return (
        <Card
            cover={<img src={imagen} alt={titulo} />}
            title={titulo}
        >
            <p>{descripcion}</p>

            {tags && tags.split(',').map((tag, index) => (
                <Tag key={index}>{tag.trim()}</Tag>
            ))}

            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                    Ver github
                </a>
            )}
        </Card>
    );
};

export default TarjetaProyecto;