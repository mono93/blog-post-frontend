import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { AuthService } from "../../services";

const Signup = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "all" });

    const [visible, setvisible] = useState(false)

    const onSubmit = async (data: any) => {
        try {
            let payload = { ...data, password: btoa(data.password) }
            await new AuthService().signup(payload);
            navigate('/login')
            alert(`User Signup Succesful, an verfication mail will be sent to ${data.email}`)
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
                <div className="breadCrumbWrap">Sign Up</div>
                <div className="mainTitle">Join The Blog Post</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formWrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <div className={errors?.firstName ? 'formGroup validation-error' : 'formGroup validation-valid'}>
                                    <label htmlFor="firstName">First Name</label>
                                    <div className="rel">
                                        <input type="text" className="inputField" id="firstName" {...register("firstName",
                                            { required: true }
                                        )} />
                                        <span className={errors?.firstName ? 'error' : ''}></span>
                                        <span className=""></span>
                                        <span className="requiredDot"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className={errors?.lastName ? 'formGroup validation-error' : 'formGroup validation-valid'}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <div className="rel">
                                        <input type="text" className="inputField" id="lastName" {...register("lastName",
                                            { required: true }
                                        )} />
                                        <span className={errors?.lastName ? 'error' : ''}></span>
                                        <span className=""></span>
                                        <span className="requiredDot"></span>
                                    </div>
                                </div>
                            </div>
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
                                <div className={errors?.dateOfBirth ? 'formGroup validation-error' : 'formGroup validation-valid'}>
                                    <label htmlFor="dob">Date of Birth</label>
                                    <div className="rel">
                                        <input type="date" className="inputField" id="dob" {...register("dateOfBirth")} />
                                        <span className={errors?.dateOfBirth ? 'error' : ''}></span>
                                        <span className=""></span>
                                        <span className="requiredDot"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className={errors?.gender ? 'formGroup validation-error' : 'formGroup validation-valid'}>
                                    <label htmlFor="gender">Gender</label>
                                    <div className="rel">
                                        <select {...register("gender")}>
                                            {['Male', 'Female', 'Others'].map((ele, index) => (<option key={index}>{ele}</option>))}
                                        </select>
                                        <span className={errors?.gender ? 'error' : ''}></span>
                                        <span className=""></span>
                                        <span className="requiredDot"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="formGroup btnTopSpace">
                                    <button type="submit" className="btn btn-warning btnFull" disabled={!isDirty || !isValid}>Sign Up</button>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="smlText haveAccount">Already have an account?&nbsp; <a href={void (0)} onClick={() => navigate('/login')}>Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup