import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import moment from 'moment'
import { Api } from "../../Services/api";
import { LoadingSmall } from "../Loading";
import { Wrapper,Container, Box, BoxTime, BoxInfo, Text } from "./styles";

const Statement = () => {
    const [loading, setLoading] = useState(true);
    const [transaction, setTransaction] = useState([]);
    
    useEffect(() =>{
        const loadTransaction = async() =>{
            try{
                const { data } = await Api.Transaction.list();

                const formatDate = data.map((element) => {
                    element.createdAt = moment(element.createdAt).format("DD/MM/YYYY hh:mm:ss");

                    return element;
                })
                setTransaction(formatDate);
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
                    title: 'Houve um problema ao carregar o histórico, tente novamente mais tarde'
                  })

                setLoading(false);
            }
        }

        loadTransaction()
    },[])

    return(
        <Wrapper load={loading}>
            {loading ? <LoadingSmall /> 
            :   
            <>
                <h3>Histórico de transações</h3>
                    {transaction.length >= 1 && (
                        <Container>
                            {transaction.map((element) =>(
                                <Box key={element._id} types={element.types}>
                                    <BoxTime>
                                        <Text>{element.createdAt}</Text>
                                    </BoxTime>
                                    <BoxInfo>
                                        <Text types={element.types}>{element.name}</Text>
                                        <Text types={element.types}>{element.types === "buy" ? `Compra` : `Venda`}</Text>
                                        <Text types={element.types}>Quantidades do pokemon: {element.quotas}</Text>
                                        <Text types={element.types}>{`Valor em BTC ${element.value}`}</Text>
                                    </BoxInfo>
                                </Box>
                            ))}
                        </Container>
                    )}
            </> 
            }
        </Wrapper>
    );   
}

export default Statement;