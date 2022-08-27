import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import { AuthContext } from '../store/AuthContext';

const PrivateRoutes = () => {
    const authCtx = useContext(AuthContext);
    
    return (
        authCtx?.state.idToken ? <AppLayout> <Outlet /> </AppLayout> : <Navigate to='/login' />
    )
}

export default PrivateRoutes