import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FirebaseService } from "../../services";

const ForgotPassword = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "all" });

    const onSubmit = async (data: any) => {
        try {
            await new FirebaseService().sendPasswordReset(data.email);
            navigate('/login');
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
                <div className="breadCrumbWrap">Forgot Password</div>
                <div className="mainTitle">The Blog Post</div>
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
                                <div className="formGroup btnTopSpace">
                                    <button type="submit" className="btn btn-warning btnFull" disabled={!isDirty || !isValid}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword