import styled from 'styled-components';
import { Types } from '../../utils/pokemonTypes';
import { theme } from '../../utils/theme';

export const Wrapper = styled.div`
    height: 100vh;

    @media (min-width: 600px){ 
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Box = styled.div`
    @media (min-width: 600px){ 
        display: flex;
        justify-content: center;
    }
`;

export const BoxImg = styled.div`
    background: ${props => Types[props.types].primary};
`;

export const Image = styled.img`
    width: 300px;
    display: block;
    margin: 0 auto;
`;

export const BoxInfo = styled.div`
    background: ${theme.color.light};
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
        display: block;
    }
`;

export const Title = styled.h3`
    text-align: center;
    font-size: ${theme.size[500]};
    font-family: ${theme.font.Oswald};
`;

export const BoxPrice = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const BaseXp = styled.span`
    font-size: ${theme.size[400]};;
    text-align: center;
    font-family: ${theme.font.Roboto};
    color: ${theme.gray[300]};
`;

export const Price = styled.span`
    font-size: ${theme.size[400]};;
    text-align: center;
    font-family: ${theme.font.Roboto};
    color: ${theme.gray[300]};
    margin-left: 35px;
`;

export const BoxButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`;

export const Text = styled.p`
`;

export const Buy = styled.button`
    width: 120px;
    height: 50px;
    padding: 15px;
    border: none;
    background: ${theme.color.primary};
    border-radius: 5px;
    color: white;
    font-size: ${theme.size[300]};
    font-weight: 400;
    margin-top: 15px;
`;

export const BoxCount = styled.div`
    position: relative;
    width: 160px;
    height: 45px;
    background: transparent;
    overflow: hidden;
    border-radius: 30px;
    margin: 2px;
`;

export const Button = styled.button`
    display: inline-block;
    width: 80px;
    height: 100%;
    background-color: ${(props) => props.isDisabled ? `rgba(99, 170, 188, 0.25);` : `${theme.color.primary}`};
    border: none;
    color: white;
    font-size: ${theme.size[300]};
    transition: background-color 0.2s ease;

    &:nth-of-type(1) {
        padding-right: 20px;
    }
    
    &:nth-of-type(2) {
        padding-left: 20px;
    }

    &:hover {
        background-color: rgba(99, 170, 188, 0.25);
    }
`;

export const Display = styled.span`
    position: absolute;
    left: 44%;
    margin-left: -14px;
    display: inline-block;
    background: white;
    height: 100%;
    width: 50px;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    font-size: ${theme.size[100]};
    color: ${theme.gray[300]};
    letter-spacing: 1px;
    font-weight: bold;
`;


export const BoxText = styled.div`
    > p{
        font-size: ${theme.size[300]}

        @media (min-width: 600px){ 
            font-size: ${theme.size[200]}
        }
    }
`;

export const BoxBuy = styled.div``;