import { Link, useNavigate } from 'react-router-dom';
import { Container } from "./styles";

const Menu = ({ open }) => {
    const navigate = useNavigate();

    const handleExit = () =>{

        localStorage.removeItem("Name");
        localStorage.removeItem("Token");
        
        navigate('/')
    }


    return(
        <Container open={open}>
            <Link to={'/home'}>Home</Link>
            <Link to={'/Wallet'}>Carteira</Link>
            <span onClick={() => handleExit()}>Sair</span>
        </Container>
    );
}

export default Menu;