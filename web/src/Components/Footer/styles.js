import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Wrapper = styled.div`
    background: black;
    padding: 25px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    & p{
        color: white;
        font-size: ${theme.size[300]};
        font-weight: bold;
        text-align: center;
    }

    & a{
        color: white;
    }

    & span{
        margin: 7px 10px 0 10px;
        color: white;
    }

    @media (min-width: 600){
        padding: 10px;
    }
`;