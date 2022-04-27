import { useState, useRef  } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import Burger from '../Burger';
import Menu from '../Menu';
import { useOnClickOutside } from '../Menu/contents';
import { Wrapper, Box, BoxGoBack, BoxMenu, BoxText, Text } from './styles';

const Header = () => {
    const navigate = useNavigate();
    const node = useRef();
    const [open, setOpen] = useState(false);
    useOnClickOutside(node, () => setOpen(false));

    return(
        <Wrapper>
            <Box>
                <BoxGoBack>
                    <FaArrowLeft size={30} color="white" onClick={() => navigate(-1)} />
                </BoxGoBack>
                <BoxText>
                    {/* <Text>Olá treinado(a) {name.social ? name.social : name.first}</Text> */}
                </BoxText>
                <BoxMenu ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </BoxMenu>
            </Box>
        </Wrapper>
    );
}

export default Header;