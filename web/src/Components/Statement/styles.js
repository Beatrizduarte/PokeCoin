import styled from 'styled-components'
import { theme } from '../../utils/theme';

export const Wrapper = styled.div`
    min-height: ${props => props.load ? 'Calc(100vh - 166px)' : 'auto'};
    display: ${props => props.load ? 'flex' : 'block'};
    justify-content: center;
    align-items: center;

    > p{
        padding-left: 15px;
        font-size: ${theme.size[400]};
        color: ${theme.gray[400]};
    }

    > h3{
        font-size: ${theme.size[400]};
        padding-left: 15px;
        font-family: ${theme.font.Roboto};
    }
`;

export const Container = styled.div``;

export const Box = styled.div`
    border-top: 2px solid #CECECE;
    background-color: #dbecf0;
    padding: 20px;
`;

export const BoxTime = styled.div`
    padding-left: 20px;
`;

export const BoxInfo = styled.div`
    > p{
        font-size: ${theme.size[100]};
        padding: 10px 0 0 30px;
        line-height: 1px;
    }
`;

export const Text = styled.p`
    color: ${props => props.types === 'buy' ? 'green' : props.types === 'sell' ? 'red' : 'black'};
`;
