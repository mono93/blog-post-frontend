import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthService, FirebaseService } from "../../services";
import { AuthContext } from "../../store/AuthContext";
import * as ActionTypes from '../../store/actions/actionTypes';

const Login = () => {

    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "all" });

    const [visible, setvisible] = useState(false);

    const onSubmit = async (data: any) => {
        try {
            await new AuthService().isUserAvailable(data.email);
            const res: any = await new FirebaseService().logInWithEmailAndPassword(data.email, data.password);
            authCtx?.dispatch({ type: ActionTypes.LOGIN, value: res._tokenResponse })
            localStorage.setItem('the-blog-post-auth-data', JSON.stringify(res._tokenResponse))
            navigate('/myProfile');
        } catch (err) {
            alert('Something went wrong please try again!!')
        }
    }

    return (
        <div className="signupWrapper">
            <div className="signupLeftSide">
                <h2> The Blog Post Project </h2>
            </div>
            <div className="signupMainSide">
                <div className="breadCrumbWrap">Log In</div>
                <div className="mainTitle">Welcome Back</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formWrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <div className={errors?.email ? 'formGroup validation-error' : 'formGroup validation-valid'}>
                                    <label htmlFor="email">Email Address</label>
                                    <div className="rel">
                                        <input type="text" className="inputField" id="email" {...register("email",
                                            {
                                                required: true,
                                                pattern: /\S+@\S+\.\S+/
                                            }
                                        )} />
                                        <span className={errors?.email ? 'error' : ''}></span>
                                        <span className=""></span>
                                        <span className="requiredDot"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className={errors?.password ? 'formGroup validation-error' : 'formGroup validation-valid'}>
                                    <label htmlFor="password">Password</label>
                                    <div className="rel">
                                        <input type={visible ? 'text' : 'password'} className="inputField" id="password" {...register("password",
                                            {
                                                required: true,
                                                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                                            }
                                        )} />
                                        <span className={visible ? 'passwordShow' : 'toggle-password'} onClick={() => setvisible(visibilty => !visibilty)} />
                                        <span className={errors?.password ? 'error' : ''}></span>
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
                                    <button type="submit" className="btn btn-warning btnFull" disabled={!isDirty || !isValid}>Log In</button>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="smlText haveAccount">
                                    Don't have an account?&nbsp; <a href={void (0)} onClick={() => navigate('/signup')}>Create an account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-md-12">
                        <div>------------------------------      OR      --------------------------------</div>
                    </div>
                    <div className="col-md-12">
                        <div className="alternateLoginButtonWrap">
                            <button type="submit" className="mainStyle"> <img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Sign in with google </button>
                        </div>
                    </div>
                    {/* <div className="col-md-12">
                        <div className="alternateLoginButtonWrap">
                            <button type="submit" className="mainStyle"> <img className="facebook" src="https://toppng.com/uploads/preview/facebook-logo-png-transparent-facebook-f-logo-sv-11563088711q5rgq6hd0v.png" /> Sign in with facebook </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Login