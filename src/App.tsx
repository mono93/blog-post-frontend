import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/Custom-style.css'
import AppLayout from './layout/AppLayout';
import PageNotFound from './layout/PageNotFound';
import { PrivateRoutes } from './routes';
import CustomActionHandler from './views/Auth/CustomActionHandler';
import ForgotPassword from './views/Auth/ForgotPassword';
import Signup from './views/Auth/Signup';
import Login from './views/Auth/Login';
import Blogs from './views/Blogs/Blogs';
import Landing from './views/Blogs/Landing';
import MyProfile from './views/Profile/MyProfile';
import { AuthContext } from './store/AuthContext';

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route path='/' element={<AppLayout><Landing /></AppLayout>} />
      <Route element={<PrivateRoutes />}>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/myProfile' element={<MyProfile />} />
      </Route>
      <Route path='/login' element={authCtx?.state.idToken ? <Navigate to='/blogs' /> : <Login />} />
      <Route path='/signup' element={authCtx?.state.idToken ? <Navigate to='/blogs' /> : <Signup />} />
      <Route path='/forgotpassword' element={authCtx?.state.idToken ? <Navigate to='/blogs' /> : <ForgotPassword />} />
      <Route path='/customActionHandler' element={authCtx?.state?.idToken ? <Navigate to='/blogs' /> : <CustomActionHandler />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
