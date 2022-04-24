import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Wrapper, Box, BoxImage, BoxForm ,Col, Text, Button } from "./styles";
import pokeballSignUp from '../../assets/pokeballSignUp.gif'
import Input from '../../Components/Input';
import { Api } from '../../Services/api'

const SignUp = () =>{
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: {
            first: '',
            last: '',
            social: ''
        },
        email: '',
        password: ''
    })

    const handleData = async () =>{
        if(!data.name.first && !data.name.last){
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
                title: 'Os campos Nome e Sobrenome são obrigatórios'
              })
        }else if(!data.email) {
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
                title: 'O campo e-mail é obrigatório'
              })
        } else if(!data.password){
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
                title: 'O campo senha e obrigatório'
              })
        } else {
            try{

                const { data: result } = await Api.User.create(data);

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Cadastro realizado com sucesso',
                    showConfirmButton: false,
                    timer: 1500
                  })

                navigate('/');
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
                    title: 'Falha ao tentar criar a conta, por favor, tente novamente mais tarde'
                  })
            }
        }
    }

    return(
        <Wrapper>
            <Box>
                <BoxImage>
                    <img src={pokeballSignUp} alt="Cadastre-se" />
                </BoxImage>
                <BoxForm>
                    <Text>Bem-vindo Treinador(a) Pokemon, cadastre-se para acessar a plataforma</Text>
                    <Col>
                        <Input
                            name="first"
                            value={data.name.first}
                            label="Nome"
                            types="text"
                            userInput={(params) => setData({ ...data, name: { ...data.name, first: params } })}
                            placeholder="Misty"
                            isRequired={true}
                        />
                        <Input
                            name="last"
                            value={data.name.last}
                            label="Sobrenome"
                            types="text"
                            userInput={(params) => setData({ ...data,  name: { ...data.name, last: params}})}
                            placeholder="Staryu"
                            isRequired={true}
                        />
                    </Col>
                    <Col>
                        <Input
                            name="social"
                            value={data.name.social}
                            label="Nome Social"
                            types="text"
                            userInput={(params) => setData({ ...data, name: { ...data.name, social: params}})}
                            placeholder="Kasumi"
                            isRequired={false}
                        />
                    </Col>
                    <Col>
                        <Input
                            name="email"
                            value={data.email}
                            label="Email"
                            types="email"
                            userInput={(params) => setData({ ...data, email: params })}
                            placeholder="Kasumi@mysty.com"
                            isRequired={true}
                        />
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
                        <Button onClick={handleData} >Cadastrar</Button>
                    </Col>
                </BoxForm>
            </Box>
        </Wrapper>
    );
}

export default SignUp;