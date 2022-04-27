import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Container = styled.div`
    margin-bottom: 30px;
    position: relative;

    & label{
        display: block;
        font-size: ${theme.size[200]};
        font-weight: 500;
        color: ${theme.gray[400]};
        margin: 10px 0 5px 5px;
        font-family: ${theme.font.Roboto};
    }    

    & input{
        width: 350px;
        height: 40px;
        border: 1px solid #ddd;
        outline: none;
        font-size: ${theme.size[100]};
        padding: 0 50px 0 15px; 
        font-family: ${theme.font.Roboto};
    }

    & svg{
        position: absolute;
        right: 15px;
        margin: 5px 0 0 0;
    }
`;