import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { 
    Wrapper,
    Container,
    Box,
    Text,
    Title,
    Info,
    ID,
    Image
} from "./styles";

const PokeWallet = ({elements}) => {
    const navigate = useNavigate();

    return(
        <Wrapper>
            <h3>Pokemon Comprados</h3>
                <Container>
                    {elements.wallet.map((element) => (
                        //  <Box key={element.id} types={element.types}>
                         <Box key={element.id} types={element.types} onClick={() => navigate(`/pokemonSell/${element.id}`, { state: element })}>
                         <ID types={element.types}>{`#${element.pokemonID}`}</ID>
                         <Title>{element.name}</Title>
                         <Image 
                         src={element.image}
                         />
                         {/* <Info>Esse pokemon valorizou</Info> */}
                         <Info>{`Quantidade: ${element.quotas}`}</Info>
                         <Info>{`Valor em BTC:`}</Info>
                         <Info>{`${element.value}`}</Info>
                         <Text types={element.types}>{element.types}</Text>
                     </Box>
                    ))}
                </Container>
        </Wrapper>
    );   
}

export default PokeWallet;