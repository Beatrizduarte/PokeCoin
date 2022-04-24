import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ff99ff;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h3 {
        text-align: center;
        font-size: ${theme.size[500]};
        color: white;
        font-weight: bold;
    }
`;

export const BoxImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > img{
        width: 300px;
    }

    > span{
        font-size: ${theme.size[600]};
        
    }
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p{
        text-align: center;
        font-size: ${theme.size[400]};
        color: white;
        font-weight: bold;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 15px;
    background-color: ${theme.color.primary};
    color: white;
    cursor: pointer;
    font-size: ${theme.size[100]};
    font-weight: bold;
    box-shadow: 1px 1px 3px ${theme.gray[300]};
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(69, 142, 161, 0.25);
    }
`;