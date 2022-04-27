import { useState,useEffect } from 'react'
import Swal from 'sweetalert2';
import PokeList from '../../Components/PokeList';
import { Api } from '../../Services/api';
import { LoadingSmall, Loading } from '../../Components/Loading';
import { Wrapper } from './styles'

const Home = () =>{
    const [loading, setLoading] = useState(true);
    const [totalPokemon] = useState(1126);
    const [pokemonPerPage, setPokemonPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonList, setPokemonList] = useState({});

    useEffect(() =>{
        const loadPokemonList = async() =>{
            setLoading(true)
            try{
                const { data } = await Api.Pokemon.list(pokemonPerPage, currentPage - 1)

                setPokemonList(data);
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
                    title: 'Houve um problema ao realizar a listagem, tente novamente mais tarde'
                  })

                setLoading(false);
            }
        }

        loadPokemonList();

    },[pokemonPerPage, currentPage])

    return(
        <Wrapper load={loading}>
        {loading ? <LoadingSmall />
            :
            <>
                <PokeList 
                    elements={pokemonList} 
                    pokemonPerPage={pokemonPerPage}
                    setPokemonPerPage={setPokemonPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPokemon={totalPokemon}
                />  
            </>
        }
        </Wrapper>
    );
}

export default Home;