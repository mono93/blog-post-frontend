import { useNavigate } from "react-router-dom";

const PageNotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="site">
            <div className="sketch">
                <div className="bee-sketch red"></div>
                <div className="bee-sketch blue"></div>
            </div>

            <h1 className="page404">404:
                <small>Players Not Found</small> <a className="backToHome" href={void (0)} onClick={() => navigate('/')}> Back to home page </a></h1>


        </div>
    )
}

export default PageNotFound