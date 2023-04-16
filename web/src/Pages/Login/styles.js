import styled from "styled-components";
import { theme } from '../../utils/theme';

export const Wrapper = styled.div`
    background: rgb(241,96,91);
    background: radial-gradient(circle, rgba(241,96,91,1) 0%, rgba(99,170,188,1) 100%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    background: rgba(99, 170, 188, 0.4);
    padding: 40px;
    box-shadow: 1px 1px 3px #26505a;
`;

export const BoxText = styled.div``;

export const BoxInput = styled.div``;

export const Text = styled.p`
    text-align: center;
    font-size: ${theme.size[500]};
    color: White;
    font-weight: 500;
    font-family: ${theme.font.Roboto}
`;

export const BoxButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > a{
        font-size: ${theme.size[100]};
        color: White;
        text-decoration: none;
        margin-top: 20px;

        &:hover{
            text-decoration: underline;
        }
    }
`;

export const Button = styled.button`
    width: 120px;
    height: 50px;
    padding: 15px;
    border: none;
    background: ${theme.color.primary};
    border-radius: 5px;
    color: white;
    font-size: ${theme.size[300]};
    font-weight: 400;
    margin-top: 15px;
    cursor: pointer;
    outline: none;
`;
