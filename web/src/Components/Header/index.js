import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Burger from '../Burger';
import Menu from '../Menu';
import { Wrapper, Box, BoxGoBack, BoxMenu, BoxText, Text } from './styles';

const Header = () => {
    const name = JSON.parse(localStorage.getItem("Name"));
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return(
        <Wrapper>
            <Box>
                <BoxGoBack>
                    <FaArrowLeft size={30} color="white" onClick={() => navigate(-1)} />
                </BoxGoBack>
                <BoxText>
                    {/* <Text>Olá treinado(a) {name.social ? name.social : name.first}</Text> */}
                </BoxText>
                <BoxMenu>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </BoxMenu>
            </Box>
        </Wrapper>
    );
}

export default Header;