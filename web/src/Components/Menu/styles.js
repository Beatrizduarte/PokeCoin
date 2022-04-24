import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${theme.color.light};
    height: 100vh;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
    text-align: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

    a, span {
        font-size: ${theme.size[500]};
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${theme.gray[400]};
        text-decoration: none;
        transition: color 0.3s linear;
        cursor: pointer;

        &:hover {
          color: ${theme.color.primary};
        }
    }

    @media (min-width: 600) {
      font-size: ${theme.size[500]};
      text-align: left;
  }
`;

