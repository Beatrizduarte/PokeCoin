import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Wallet from './Pages/Wallet';
import NotFoundPage from './Pages/NotFoundPage';
import PokemonDetails from './Pages/PokemonDetails';
import SignUp from './Pages/SignUp';
import WalletPokemonDetails from './Components/WalletPokemonDetails';
import { ROUTES } from './Constants';
import PrivateRoute from './Routes/PrivateRoute';

const Router = () => {
    // const isAuth = sessionStorage.getItem('Token')

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                    <Route path={ROUTES.SINGUP} element={<SignUp />} />
                    <Route path={ROUTES.ERROR} element={<NotFoundPage />} />
                    <Route path={ROUTES.HOME} element={
                        <PrivateRoute>
                            <Header /> 
                            <Home />
                        </PrivateRoute>
                    }/>
                    <Route path={ROUTES.WALLET} element={
                        <PrivateRoute>
                            <Header />
                            <Wallet />
                        </PrivateRoute>
                    }/>
                    <Route path={ROUTES.POKEMON} element={
                        <PrivateRoute>
                            <Header />
                            <PokemonDetails />
                        </PrivateRoute>
                    }/>
                    <Route path={ROUTES.POKEMONSELL} element={
                        <PrivateRoute>
                            <Header />
                            <WalletPokemonDetails />
                        </PrivateRoute>
                    }/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default Router;