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

const WalletPokemonDetails = ({ element, bitcoin }) => {
    const navigate = useNavigate();
    const [changeValue, setChangeValue] = useState(1)
    const { state } = useLocation();
    const [valuePerQuotas, setValuePerQuotas] = useState()
    let BTC = element  * state.base_experience
    let buyValue = BTC * changeValue;


    const handleSum = () =>{
        if(changeValue >= 1){
            setChangeValue(changeValue + 1)
        }
    }

    const handleSub = async() =>{
        if(changeValue >= 0){
            setChangeValue(changeValue - 1)
        }
    }

    const handleData = async() =>{
        const data = {
            types: "sell",
            pokemon: {
                name: state.name,
                image: state.image,
                pokemonId: state.id,
                types: state.types[0].type.name
            },
            info: {
                baseXp: state.base_experience,
                BTCDay: BTC,
                quotas: changeValue,
                value: buyValue
            }
        }

        let confirmedSell;

        await Swal.fire({
            title: 'Você deseja confirmar a compra?',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Compra realizada', '', 'success')
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
                    {/* <Image 
                    src={state.image}
                    alt={state.name}
                    /> */}
                </BoxImg>
                <BoxInfo>
                    <Title>{state.name}</Title>
                    <BoxPrice>
                        <BaseXp>Contas: {state.quotas}</BaseXp>
                        <Price>Preço por cota {BTC}</Price>
                    </BoxPrice>
                    <BoxPrice>

                    </BoxPrice>
                    <BoxButton>
                        <BoxCount>
                            <Text>]{`Deseja vender quantos ${state.name}?`}</Text>
                            <Button onClick={handleSub} disabled={changeValue === 0} isDisabled={changeValue === 0}>
                                <FaMinus size={25} />
                            </Button>
                            <Display>{changeValue}</Display>
                            <Button onClick={handleSum} disabled={changeValue === state.quotas} isDisabled={changeValue === state.quotas}>
                                <FaPlus size={25} />
                            </Button>
                        </BoxCount>
                        <BoxText>
                            <Text>{`${changeValue} ${state.name} equivalem a BTC ${buyValue}`}</Text>
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