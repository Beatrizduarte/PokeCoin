import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Wrapper = styled.div`
    background: black;
    padding: 10px;

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
        margin: 5px 15px 0 5px;
    }
`;