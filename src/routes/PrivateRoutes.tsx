import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import { AuthContext } from '../store/AuthContext';

const PrivateRoutes = () => {
    const authCtx = JSON.parse(localStorage.getItem('the-blog-post-auth-data') as string); /*useContext(AuthContext);*/
    
    return (
        authCtx?.idToken ? <AppLayout> <Outlet /> </AppLayout> : <Navigate to='/login' />
    )
}

export default PrivateRoutes