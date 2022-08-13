import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    return (
        <div className="signupWrapper">
            <div className="signupLeftSide">
                <h2> The Blog Post Project </h2>
            </div>
            <div className="signupMainSide">
                <div className="breadCrumbWrap">Sign Up</div>
                <div className="mainTitle">Join The Blog Post</div>
                <div className="formWrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="formGroup validation-valid">
                                <label htmlFor="firstName">First Name</label>
                                <div className="rel">
                                    <input type="text" name="email" className="inputField" id="firstName" />
                                    <span className=""></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="formGroup validation-valid">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="rel">
                                    <input type="text" name="lastName" className="inputField" id="lastName" />
                                    <span className=""></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
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
                                <label htmlFor="password">Password</label>
                                <div className="rel">
                                    <input type="password" name="password" className="inputField" id="password" />
                                    <span className=""></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="formGroup validation-valid">
                                <label htmlFor="dob">Date of Birth</label>
                                <div className="rel">
                                    <input type="date" name="dob" className="inputField" id="dob" />
                                    <span className=""></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="formGroup validation-valid">
                                <label htmlFor="gender">Gender</label>
                                <div className="rel">
                                    <select>
                                        {['Male', 'Female', 'Others'].map((ele, index) => (<option key={index}>{ele}</option>))}
                                    </select>
                                    <span className=""></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="formGroup btnTopSpace">
                                <button type="submit" className="btn btn-warning btnFull" disabled>Sign Up</button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="smlText haveAccount">Already have an account?&nbsp; <a href={void (0)} onClick={() => navigate('/login')}>Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup