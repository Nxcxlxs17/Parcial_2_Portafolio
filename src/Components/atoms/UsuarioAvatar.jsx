import {Avatar} from "antd";

const UsuarioAvatar = ({imagen, tamano = 150}) =>{
    return (<Avatar size = {tamano} src={imagen} />)
};

export default UsuarioAvatar;