import styled from "styled-components";
import { theme } from '../../utils/theme';

export const Container = styled.ul`
    display: flex;
    list-style-type: none;
`;

export const List = styled.li`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    font-weight: bold;
    color: ${theme.gray[400]};
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
    background: white;

    &.dots:hover {
        background-color: ${theme.color.hover};
        cursor: default;
        color: white;
      }

    &:hover {
      background-color: ${theme.color.hover};
      cursor: pointer;
      color: white;
    }

    ${({ isSelected }) => isSelected && `
        background-color: ${theme.color.hover};
        color: white;
    `}

    // .arrow {
    //   &::before {
    //     position: relative;
    //     /* top: 3pt; Remova essa linha do comentário para baixar os ícones conforme solicitado nos comentários*/
    //     content: '';
    //     /* Usando uma escala em, as setas terão o tamanho acompanhando a fonte */
    //     display: inline-block;
    //     width: 0.4em;
    //     height: 0.4em;
    //     border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    //     border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    //   }

    //   &.left {
    //     transform: rotate(-135deg) translate(-50%);
    //   }

    //   &.right {
    //     transform: rotate(45deg);
    //   }
    // }

    ${({ isDisable }) => isDisable && `
        pointer-events: none;

        > svg::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
        }

        &:hover {
        background-color: transparent;
        cursor: default;
        }
    `}

`;