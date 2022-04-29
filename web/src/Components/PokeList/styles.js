import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../utils/theme'
import { Types } from '../../utils/pokemonTypes';

export const Wrapper = styled.div`
    background: ${theme.color.primary};

`;

export const PaginationContainer = styled.div`
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;
    padding: 30px 0;

    @media (min-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export const Box = styled.div`
    width: 80%;
    background: ${theme.gray[100]};
    box-shadow: 1px 1px 5px ${theme.gray[300]};
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        background: ${(props) => 
            Types[props.types].hover
        };

        transition: 0.4s;
    }
`;

export const Title = styled.h3`
    font-size: ${theme.size[200]};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    padding-top: 10px;
`;

export const ID = styled.span`
    background: ${(props) => 
        Types[props.types].primary
    };
    display: inline-block;
    width: 80px;
    padding: 2px;
    // position: absolute;
    border-radius: 5px 0 5px 0;
    color: #FFF;
    font-weight: bold;
`;

export const Text = styled.p`
    text-align: center;
    background: ${(props) => 
        Types[props.types].primary
    };
    padding: 11px;
`;

export const Image = styled.img`
    width: 100px;
    display: block;
    margin: 0px auto;

    @media (min-width: 630px){
        width: 200px;
    }
`;