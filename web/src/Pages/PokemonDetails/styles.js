import styled from 'styled-components';

export const Wrapper = styled.div`
    display: ${props => props.load ? 'flex' : 'block'};
    justify-content: center;
`;