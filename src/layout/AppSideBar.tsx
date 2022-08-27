import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseService } from "../services";
import { AuthContext } from "../store/AuthContext";
import * as ActionTypes from '../store/actions/actionTypes';

const AppSideBar = (props: any) => {

    const authCtx = useContext(AuthContext);
    const navigate = useNavigate()

    const handler = () => {
        if (authCtx?.state.idToken) {
            new FirebaseService().logout();
            authCtx.dispatch({ type: ActionTypes.LOGOUT, value: {} })
            navigate('/')
        } else {
            navigate('/signup')
        }
    }

    return (
        <div className={`side-bar ${props.sidebarExpand ? 'active' : ''}`}>
            <a href={void (0)} className="close-btn" style={{ cursor: 'pointer' }} onClick={() => props.setSidebarExpend(false)}>×</a>
            {authCtx?.state.idToken && <a href={void (0)} style={{ cursor: 'pointer' }} onClick={() => navigate('/blogs')}>Blogs</a>}
            <a href={void (0)} style={{ cursor: 'pointer' }} onClick={() => handler()}>{authCtx?.state.idToken ? 'Logout' : 'Signup'}</a>
            <a href={void (0)} style={{ cursor: 'pointer' }} onClick={() => navigate('/myProfile')}>My Profile</a>
        </div>
    )
}

export default AppSideBar