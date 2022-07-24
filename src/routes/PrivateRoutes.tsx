import { Navigate, Outlet } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';

const PrivateRoutes = () => {
    let auth = { 'token': false }
    return (
        auth.token ? <AppLayout> <Outlet /> </AppLayout> : <Navigate to='/login' />
    )
}

export default PrivateRoutes