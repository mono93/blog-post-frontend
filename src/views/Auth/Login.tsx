import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="signupWrapper">
            <div className="signupLeftSide">
                <h2> The Blog Post Project </h2>
            </div>
            <div className="signupMainSide">
                <div className="breadCrumbWrap">Log In</div>
                <div className="mainTitle">Welcome Back</div>
                <div className="formWrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="formGroup validation-valid">
                                <label htmlFor="email">Email Address</label>
                                <div className="rel">
                                    <input type="text" name="email" className="inputField" id="email" />
                                    <span className=""></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="formGroup validation-valid">
                                <label htmlFor="email">Password</label>
                                <div className="rel">
                                    <input type="text" name="email" className="inputField" id="email" />
                                    <span className=""></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="formGroup forgotPassLink">
                                <a href={void (0)} onClick={() => navigate('/forgotPassword')}> Forgot password?</a>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="formGroup btnTopSpace">
                                <button type="submit" className="btn btn-warning btnFull" disabled>Log In</button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="smlText haveAccount">
                                Don't have an account?&nbsp; <a href={void (0)} onClick={() => navigate('/signup')}>Create an account</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div>------------------------------      OR      --------------------------------</div>
                    </div>
                    <div className="col-md-12">
                        <div className="alternateLoginButtonWrap">
                            <button type="submit" className="mainStyle"> <img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Sign in with google </button>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="alternateLoginButtonWrap">
                            <button type="submit" className="mainStyle"> <img className="facebook" src="https://toppng.com/uploads/preview/facebook-logo-png-transparent-facebook-f-logo-sv-11563088711q5rgq6hd0v.png" /> Sign in with facebook </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login