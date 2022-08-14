import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/Custom-style.css'
import AppLayout from './layout/AppLayout';
import PageNotFound from './layout/PageNotFound';
import { PrivateRoutes } from './routes';
import ForgotPassword from './views/Auth/ForgotPassword';
import Login from './views/Auth/Login';
import Signup from './views/Auth/Signup';
import Blogs from './views/Blogs/Blogs';
import Landing from './views/Blogs/Landing';

function App() {

  let auth = { 'token': JSON.parse(localStorage.getItem('firebase-details') as string)?.idToken }

  return (
    <Routes>
      <Route path='/' element={auth.token ? <Navigate to='/blogs' /> : <AppLayout><Landing /></AppLayout>} />
      <Route element={<PrivateRoutes />}>
        <Route path='/blogs' element={<Blogs />} />
      </Route>
      <Route path='/login' element={auth.token ? <Navigate to='/blogs' /> : <Login />} />
      <Route path='/signup' element={auth.token ? <Navigate to='/blogs' /> : <Signup />} />
      <Route path='/forgotpassword' element={auth.token ? <Navigate to='/blogs' /> : <ForgotPassword />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
