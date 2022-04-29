import { Link, useNavigate } from 'react-router-dom';
import { Container } from "./styles";
import { ROUTES } from "../../Constants";

const Menu = ({ open }) => {
    const navigate = useNavigate();

    const handleExit = () =>{

        sessionStorage.removeItem("name");
        sessionStorage.removeItem("token");
        
        navigate(ROUTES.LOGIN);
    }


    return(
        <Container open={open}>
            <Link to={'/home'}>Home</Link>
            <Link to={'/wallet'}>Carteira</Link>
            <Link to={'/extract'}>Extrato</Link>
            <span onClick={() => handleExit()}>Sair</span>
        </Container>
    );
}

export default Menu;