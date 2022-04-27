import { Link, useNavigate } from 'react-router-dom';
import { Container } from "./styles";
import { ROUTES } from "../../Constants";

const Menu = ({ open }) => {
    const navigate = useNavigate();

    const handleExit = () =>{

        sessionStorage.removeItem("Name");
        sessionStorage.removeItem("Token");
        
        navigate(ROUTES.LOGIN);
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