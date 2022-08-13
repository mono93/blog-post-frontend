import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/Custom-style.css'
import AppLayout from './layout/AppLayout';
import PageNotFound from './layout/PageNotFound';
import { PrivateRoutes } from './routes';
import ForgotPassword from './views/Auth/ForgotPassword';
import Login from './views/Auth/Login';
import Signup from './views/Auth/Signup';
import Blogs from './views/Blogs/blogs';
import Landing from './views/Blogs/Landing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout><Landing /></AppLayout>} />
      <Route element={<PrivateRoutes />}>
        <Route path='/blogs' element={<Blogs />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
