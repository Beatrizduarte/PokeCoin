import { AiFillHeart } from   'react-icons/ai';
import { Wrapper } from "./styles";

const Footer = () => {
    return(
        <Wrapper>
            <p>Desenvolvido</p>
            <span><AiFillHeart /></span>
            <p>
                por <a href="https://github.com/Beatrizduarte" target='_blank' rel="noreferrer">Beatriz Duarte</a>
            </p>
        </Wrapper>
    );
}

export default Footer;