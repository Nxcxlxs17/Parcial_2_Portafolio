import {Typography} from "antd";

const {Title} = Typography;

const TituloSeccion = ({texto, icono}) => {
    return (
        <div style = {{textAlign: 'center', marginBottom: '32px'}}>
            <Title level={2} style={{color: '#1677ff', margin:0}}>
                {icono} <span style={{marginLeft: '8px'}}>{texto}</span>
            </Title>
        </div>
    );
};

export default TituloSeccion;