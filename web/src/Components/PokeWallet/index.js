import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { Api } from "../../Services/api";
import { LoadingSmall } from "../../Components/Loading";
import { 
    Wrapper,
    Container,
    Box,
    Text,
    Title,
    Info,
    ID,
    Image
} from "./styles";

const PokeWallet = () => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    useEffect(() =>{
        const loadData = async() =>{
            setLoading(true)
            try{
                const { data } = await Api.User.list();

                setUserData(data);
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
                    title: 'Houve um problema ao carregar a carteira, tente novamente mais tarde'
                    })

                    setLoading(false)
            }
        }

        loadData();
    },[])


    return(
        <Wrapper>
            {loading ? <LoadingSmall /> 
            :
                <>
                    <h3>Pokemon Comprados</h3>
                        <Container>
                            {userData.wallet.map((element) => (
                                //  <Box key={element.id} types={element.types}>
                                <Box key={element.id} types={element.types} onClick={() => navigate(`/pokemonSell/${element.pokemonID}`, { state: element })}>
                                    <ID types={element.types}>{`#${element.pokemonID}`}</ID>
                                    <Title>{element.name}</Title>
                                    <Image 
                                    src={element.image}
                                    />
                                    {/* <Info>Esse pokemon valorizou</Info> */}
                                    <Info>{`Quantidade: ${element.quotas}`}</Info>
                                    <Info>{`Valor em BTC:`}</Info>
                                    <Info>{`${element.value}`}</Info>
                                    <Text types={element.types}>{element.types}</Text>
                                </Box>
                            ))}
                        </Container>
                </>
            }
        </Wrapper>
    );   
}

export default PokeWallet;