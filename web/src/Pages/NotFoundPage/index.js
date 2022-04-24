import { useNavigate } from 'react-router-dom';
import pokeballNotFound from '../../assets/PokeballNotFound.gif'
import { Wrapper, Box, BoxText, BoxImage, Button } from './styles'

const NotFoundPage = () =>{
    const navigate = useNavigate();
    
    return(
        <Wrapper>
            <Box>
                <h3>Oops</h3>
                <BoxImage>
                    <span>4</span>
                    <img src={pokeballNotFound} alt="Página não encontrada"/>
                    <span>4</span>
                </BoxImage>
                <BoxText>
                    <p>Um Snorlax bloqueou o seu caminho</p>
                    <Button onClick={() => navigate('/home')}>Voltar para home</Button>
                </BoxText>
            </Box>
        </Wrapper>
    );
}

export default NotFoundPage;