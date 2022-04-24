import { Wrapper, BoxBurger } from "./styles";

const Burger = ({ open, setOpen }) => {
    return(
        <Wrapper>
            <BoxBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </BoxBurger>
        </Wrapper>
    );
}

export default Burger;