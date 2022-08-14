import { useNavigate } from "react-router-dom";
import { FirebaseService } from "../services";

const AppSideBar = (props: any) => {

    let auth = { 'token': JSON.parse(localStorage.getItem('firebase-details') as string)?.idToken };
    const navigate = useNavigate()

    const handler = () => {
        if (auth.token) {
            new FirebaseService().logout()
            localStorage.removeItem('firebase-details');
            navigate('/')
        } else {
            navigate('/signup')
        }
    }

    return (
        <div className={`side-bar ${props.sidebarExpand ? 'active' : ''}`}>
            <a href={void (0)} className="close-btn" onClick={() => props.setSidebarExpend(false)}>×</a>
            <a href={void (0)} style={{ cursor: 'pointer' }} onClick={() => handler()}>{auth.token ? 'Logout' : 'Signup'}</a>
            <a href={void (0)} style={{ cursor: 'pointer' }}>Home</a>
        </div>
    )
}

export default AppSideBar