import { useState  } from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import { Wrapper, Box, BoxText, BoxInput, Text,BoxButton, Button } from './styles';
import Input from '../../Components/Input'
import { Api } from '../../Services/api'
import { ROUTES } from '../../Constants'

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleData = async () =>{
        if(!data.email && !data.password){
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
                title: 'Os campos Email e Senha precisam ser preenchidos'
              })
        }else {
            try{

                const { data: result } = await Api.Auth.login(data)

                sessionStorage.setItem('Token', result.accessToken);
                sessionStorage.setItem('Name', JSON.stringify(result.name));

                navigate(ROUTES.HOME);
                // return <Navigate to={ROUTES.HOME} />
                
            }catch(error){
                if(error.response.status === 400){
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
                        title: 'Os dados estão incorretos ou houve uma falha no sistema, tente novamente mais tarde ou altere os dados preenchidos'
                      })
                }

                if(error.response.status === 401){
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
                        title: 'Acesso inválido'
                      })
                }
                
            }
        }
    }

    return(
       <Wrapper>
           <Box>
               <BoxText>
                   <Text>Entrar</Text>
               </BoxText>
               <BoxInput>
                    <Input
                        name="email"
                        value={data.email}
                        label="Email"
                        types="email"
                        userInput={(params) => setData({ ...data, email: params })}
                        placeholder="Kasumi@mysty.com"
                        isRequired={true}
                    />
                    <Input
                        name="password"
                        value={data.password}
                        label="Senha"
                        types="password"
                        userInput={(params) => setData({ ...data, password: params })}
                        placeholder="******"
                        isRequired={true}
                        hasIcon={true}
                    />
               </BoxInput>
               <BoxButton>
                   <Button onClick={handleData}>Acessar</Button>
                   <Link to="/signUp">Criar uma conta</Link>
               </BoxButton>
           </Box>
       </Wrapper>
    );
}

export default Login;