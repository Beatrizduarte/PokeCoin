import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
import { 
    Wrapper,
    Box,
    BoxImg, 
    Image ,
    BoxInfo, 
    Title, 
    BoxPrice, 
    BaseXp, 
    Price, 
    BoxButton, 
    Text, 
    Buy,
    Button, 
    Display,
    BoxCount, 
    BoxText,
    BoxBuy,
} from './styles';

const PokeCard = ({ element }) =>{
    const [changeValue, setChangeValue] = useState(1)
    const { state } = useLocation();
    let BTC = element  * state.base_experience
    let buyValue = BTC * changeValue;

    console.log('BTC', BTC);
    console.log('buyValue', buyValue);

    const handleSum = () =>{
        if(changeValue >= 1){
            setChangeValue(changeValue + 1)
        }
    }

    const handleSub = async() =>{
        if(changeValue > 1){
            setChangeValue(changeValue - 1)
        }
    }

    return(
        <Wrapper>
            <Box>
                <BoxImg types={state.types[0].type.name}>
                    <Image 
                    src={state.image}
                    alt={state.name}
                    />
                </BoxImg>
                <BoxInfo>
                    <Title>{state.name}</Title>
                    <BoxPrice>
                        <BaseXp>XP: {state.base_experience}</BaseXp>
                        <Price>BTC {BTC}</Price>
                    </BoxPrice>
                    <BoxButton>
                        <BoxCount>
                            <Button onClick={handleSub} disabled={changeValue === 1} isDisabled={changeValue === 1}>
                                <FaMinus size={25} />
                            </Button>
                            <Display>{changeValue}</Display>
                            <Button onClick={handleSum}>
                                <FaPlus size={25} />
                            </Button>
                        </BoxCount>
                        <BoxText>
                            <Text>{`${changeValue} Satoshi equivalem a BTC ${buyValue}`}</Text>
                        </BoxText>
                        <BoxBuy>
                            <Buy>Comprar</Buy>
                        </BoxBuy>
                    </BoxButton>
                </BoxInfo>
            </Box>
        </Wrapper>
    );
}

export default PokeCard;