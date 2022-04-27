import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../Pagination';
import {
    Wrapper,
    PaginationContainer,
    Container,
    Box,
    Title,
    ID,
    Text,
    Image
 } from './styles';

const PokeList = ({ 
    elements,
    pokemonPerPage,
    currentPage,
    setCurrentPage,
    totalPokemon
}) => {
    const navigate = useNavigate();

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

            <PaginationContainer>
                <Pagination 
                    currentPage={currentPage}
                    totalPokemon={totalPokemon}
                    pokemonPerPage={pokemonPerPage}
                    onPageChange={page => setCurrentPage(page)}
                />
            </PaginationContainer>
        </Wrapper>
    )
}

export default PokeList;