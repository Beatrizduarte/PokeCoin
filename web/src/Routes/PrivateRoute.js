import { Navigate } from 'react-router-dom';

import { ROUTES } from '../Constants';


const PrivateRoute = ({ children }) => {
    const token = sessionStorage.getItem('Token');

    return token ? children : <Navigate to={ROUTES.LOGIN} />
}

export default PrivateRoute;