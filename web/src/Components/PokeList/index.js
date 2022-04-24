import { Link, useNavigate } from 'react-router-dom';
import {
    Wrapper,
    Container,
    Box,
    Title,
    ID,
    Text,
    Image
 } from './styles';

const PokeList = ({ elements }) => {
    const navigate = useNavigate()

    return(
        <Wrapper>
            {elements.name && (
                <Container>
                    <Text>Nenhum Pokemon encontrado</Text>
                </Container>
            )}
            {elements.length >= 1 && (
                <Container>
                    {elements.map((element) =>(
                        <Box key={element.id} types={element.types[0].type.name} onClick={() => navigate(`/pokemon/${element.id}`, { state: element })}>
                            <ID types={element.types[0].type.name}>{`#${element.id}`}</ID>
                            <Title>{element.name}</Title>
                            <Image 
                            src={element.image}
                            />
                            <Text types={element.types[0].type.name}>{element.types[0].type.name}</Text>
                        </Box>
                    ))}
                </Container>
            )}
        </Wrapper>
    )
}

export default PokeList;