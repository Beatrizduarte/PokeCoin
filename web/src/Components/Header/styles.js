import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Wrapper = styled.div`
    background: #173036;
    width: 100%;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const BoxGoBack = styled.div`
    cursor: pointer;
    padding: 0 0 15px 0;

    > svg{
        margin-top: 15px;
    }
`;

export const BoxMenu = styled.div`
`;

export const BoxText = styled.div``;

export const Text = styled.p`
    color: white;
    font-weight: bold;
    font-size: ${theme.size[200]}
`;