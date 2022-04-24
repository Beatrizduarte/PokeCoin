import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;

    @media (min-width: 600px){
        justify-content: center;
    }
`;

export const Box = styled.div``

export const BoxImage = styled.div`
    display: flex;
    justify-content: center;
    background: ${theme.color.primary};
    height: 200px;

    > img {
        width: 220px;
    }
`

export const BoxForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: ${theme.color.light};
`

export const Col = styled.div`
    &:last-child{
        display: flex;
        justify-content: center;
    }
`

export const Text = styled.p`
    padding: 10px;
    font-size: 18px;
    font-family: ${theme.font.Roboto}
    font-weight: bold;
`

export const Button = styled.button`
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
    cursor: pointer;
`
