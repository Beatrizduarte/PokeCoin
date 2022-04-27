import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { LoadingSmall } from '../../Components/Loading';
import PokeCard from "../../Components/PokeCard";
import { Api } from '../../Services/api'
import { Wrapper } from './styles';

const PokemonDetails = () =>{
    const [btcValue, setBtcValue] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const loadBitcoinValue = async() =>{
            setLoading(true)
            try{
                const { data } = await Api.Bitcoin.get();

                const buyValue = Number(data.ticker.buy) / 100000000;

                setBtcValue(buyValue);
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
            {loading && <LoadingSmall />}
            {!loading && (
                <>
                    <PokeCard element={btcValue} />
                </>
            )}
        </Wrapper>
    );
}

export default PokemonDetails;
