import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { LoadingSmall } from "../../Components/Loading";
import WalletPokemonDetails from "../../Components/WalletPokemonDetails";
import { Api } from '../../Services/api';
import { Wrapper } from "./styles";

const PokemonSell = () => {
    const [sellValue, setSellValue] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const loadBitcoinValue = async() =>{
            setLoading(true)
            try{
                const { data } = await Api.Bitcoin.get();

                const sellValue = Number(data.ticker.sell) / 100000000;

                setSellValue(sellValue);
                setLoading(false);
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
                    title: 'Error ao carregar dados'
                  })

                  setLoading(false);
            }
        }

        loadBitcoinValue();
    },[])


    return(
        <Wrapper load={loading}>
            {loading ? <LoadingSmall /> 
            :
                <>
                    <WalletPokemonDetails bitcoin={sellValue}/>
                </>    
            }
        </Wrapper>
    );
}

export default PokemonSell;