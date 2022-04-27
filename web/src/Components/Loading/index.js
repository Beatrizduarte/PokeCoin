import PokeballLoading from '../../assets/pokeballLoadingIcon.gif';
import PokeballLoadingSmall from '../../assets/pokeballSmall.gif';

export const Loading = () => {
    return (
        <img 
            src={PokeballLoading}
            alt="Carregando"
            style={{width: "50%"}}
        />
    );
}

export const LoadingSmall = () => {
    return (
        <img 
            src={PokeballLoadingSmall}
            alt="Carregando"
            style={{width: "30%"}}
        />
    );
}
