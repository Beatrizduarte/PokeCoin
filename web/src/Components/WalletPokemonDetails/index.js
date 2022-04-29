import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
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
import { Api } from '../../Services/api';

const WalletPokemonDetails = ({ bitcoin }) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [changeValue, setChangeValue] = useState(state.quotas)
    let BTC = bitcoin  * state.baseXP
    let sellValue = BTC * changeValue;

    const handleSum = () =>{
        if(changeValue >= 1){
            setChangeValue(changeValue + 1)
        }
    }

    const handleSub = async() =>{
        if(changeValue >= 1){
            setChangeValue(changeValue - 1)
        }
    }

    const handleData = async() =>{
        const data = {
            types: "sell",
            pokemon: {
                name: state.name,
                image: state.image,
                pokemonID: state.pokemonID,
                types: state.types
            },
            info: {
                baseXp: state.baseXP,
                BTCDay: BTC,
                quotas: changeValue,
                value: sellValue
            }
        }

        let confirmedSell;

        await Swal.fire({
            title: 'Você deseja confirmar a venda?',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Venda realizada', '', 'success')
              return confirmedSell = true;
            } else if (result.isDenied) {
              Swal.fire('A oporação foi cancelada', '', 'info')
              return confirmedSell = false;
            }
          })

          if(confirmedSell){
              try{
                  const { data: result } = await Api.Transaction.create(data);

                  if(result){
                    navigate('/wallet');
                  }

              }catch(error){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-right',
                    iconColor: 'white',
                    customClass: {
                      popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 3500,
                    timerProgressBar: true
                  })
            
                  await Toast.fire({
                    icon: 'error',
                    title: 'Ocorreu uma falha interna, tente novamente mais tarde'
                  })
              }
          }
    }

    return(
        <Wrapper>
            <Box>
                <BoxImg types={state.types}>
                    <Image 
                    src={state.image}
                    alt={state.name}
                    />
                </BoxImg>
                <BoxInfo>
                    <Title>{state.name}</Title>
                    <BoxPrice>
                        <BaseXp>Quantidade de contas:</BaseXp>
                        <BaseXp>{state.quotas}</BaseXp>
                        <Price>Preço de venda por cota:</Price>
                        <Price>{BTC}</Price>
                    </BoxPrice>
                    <BoxButton>
                        <Text>{`Deseja vender quantos ${state.name}?`}</Text>
                        <BoxCount>
                            <Button onClick={handleSub} disabled={changeValue === 1} isDisabled={changeValue === 1}>
                                <FaMinus size={25} />
                            </Button>
                            <Display>{changeValue}</Display>
                            <Button onClick={handleSum} disabled={changeValue === state.quotas} isDisabled={changeValue === state.quotas}>
                                <FaPlus size={25} />
                            </Button>
                        </BoxCount>
                        <BoxText>
                            <Text>{`${changeValue} ${state.name} equivalem a BTC ${sellValue}`}</Text>
                        </BoxText>
                        <BoxBuy>
                            <Buy onClick={() => handleData()}>Vender</Buy>
                        </BoxBuy>
                    </BoxButton>
                </BoxInfo>
            </Box>
        </Wrapper>
    );
}

export default WalletPokemonDetails;