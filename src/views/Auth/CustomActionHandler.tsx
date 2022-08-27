import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthService, FirebaseService } from "../../services";

const CustomActionHandler = () => {

    const [visible, setvisible] = useState(false);
    const [customActionHandler, setCustomActionHandler] = useState({
        mode: 'random',
        action: 'loading'
    })

    const navigate = useNavigate();
    const { search } = useLocation();
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "all" });
    const sp = new URLSearchParams(search);

    useEffect(() => {
        setCustomActionHandler({
            ...customActionHandler,
            mode: sp.get('mode') as string
        })
    }, [])

    useEffect(() => {
        if (customActionHandler.mode === 'verifyEmail') {
            verifyEmail()
        }
    }, [customActionHandler.mode])

    const verifyEmail = async () => {
        try {
            const email = await new FirebaseService().handleVerifyEmail(sp.get('oobCode') as string);
            await new AuthService().emailVerify(email as string);
            setCustomActionHandler({
                ...customActionHandler,
                action: 'success'
            })
        } catch (err) {
            setCustomActionHandler({
                ...customActionHandler,
                action: 'fail'
            })
        }
    }

    const onSubmit = async (data: any) => {
        try {
            await new FirebaseService().handlePasswordChange(sp.get('oobCode') as string, data.password);
            setCustomActionHandler({
                ...customActionHandler,
                action: 'success'
            })
        } catch (err) {
            setCustomActionHandler({
                ...customActionHandler,
                action: 'fail'
            })
        }
    }

    return (
        <div className="signupWrapper">
            <div className="signupLeftSide">
                <h2> The Blog Post Project </h2>
            </div>
            <div className="signupMainSide">
                {(customActionHandler.mode === 'verifyEmail' && customActionHandler.action === 'loading') && <h3>Loading....</h3>}
                {(customActionHandler.mode === 'resetPassword' && customActionHandler.action === 'loading') &&
                    (
                        <Fragment>
                            <div className="breadCrumbWrap">Reset Password</div>
                            <div className="mainTitle">The Blog Post</div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="formWrapper">
                                    <div className="row">
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
                                            <div className="formGroup btnTopSpace">
                                                <button type="submit" className="btn btn-warning btnFull" disabled={!isDirty || !isValid}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Fragment>
                    )
                }
                {((customActionHandler.mode === 'verifyEmail' || customActionHandler.mode === 'resetPassword') && customActionHandler.action === 'success') && (
                    <Fragment>
                        <h3> {(customActionHandler.mode === 'verifyEmail') ? 'Email verfication Succesful' : 'Password rest Succesful'} </h3>
                        <div className="smlText haveAccount">
                            <a href={void (0)} onClick={() => navigate('/login')}>Login</a>
                        </div>
                    </Fragment>
                )}
                {((customActionHandler.mode === 'verifyEmail' || customActionHandler.mode === 'resetPassword') && customActionHandler.action === 'fail') && <h3>Oops Something went wrong, Please try again</h3>}
            </div>
        </div>
    )
}

export default CustomActionHandler