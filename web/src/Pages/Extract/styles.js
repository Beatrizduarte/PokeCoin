import styled from 'styled-components'

export const Wrapper = styled.div`
    min-height: Calc(100vh - 166px);
    display: ${props => props.load ? 'flex' : 'block'};
    justify-content: center;
    align-items: center;
`;

export const Text = styled.h3`
`;