import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import NotFoundPage from '../Pages/NotFoundPage';
import PokemonDetails from '../Pages/PokemonDetails';
import SignUp from '../Pages/SignUp';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Router>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/pokemon/:pokemonID" element={<PokemonDetails />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Router>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;