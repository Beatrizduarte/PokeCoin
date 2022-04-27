import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Statement from "../../Components/Statement";
import PokeWallet from "../../Components/PokeWallet";
import { Wrapper, Text } from "./styles";
import { Api } from "../../Services/api";
import { LoadingSmall } from "../../Components/Loading";

const Wallet = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [bitcoin, setBitcoin] = useState({});
    const [error, setError] = useState(false);


    useEffect(() =>{
        const loadData = async() =>{
            setLoading(true)
            try{
                const { data } = await Api.User.list()
                setUserData(data);
                setLoading(false)
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
                    title: 'Houve um problema ao carregar a carteira, tente novamente mais tarde'
                  })
                setError(true);
                setLoading(false);
            }
        }

        const loadBTC = async() => {
            setLoading(true)
            try{
                const { data } = await Api.Bitcoin.get();
                
                setBitcoin(data);
                setLoading(false)
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
                    title: 'Houve um problema ao carregar a carteira, tente novamente mais tarde'
                  })

                setLoading(false);
            }
        }

        loadData();
        loadBTC();

    },[])

    return(
        <Wrapper load={loading}>
            {loading ? <LoadingSmall /> 
            :
            <>{!error ? 
                <>
                    <PokeWallet elements={userData} bitcoin={bitcoin} />
                    <Statement />
                </>
            :  
                <Text>Não existe dados para ser exibidos.</Text>
            }    
            </>
            }
        </Wrapper>
    );   
}

export default Wallet;