import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "all" });

    const onSubmit = async (data: any) => {
        try {
            console.log(data)
        } catch (err) {
            alert('Something went wrong please try again!!')
        }
    }

    return (
        <div className="myProfileWrapper">
            <div className="mainTitle myProfileTitle">My Profile</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formWrapper myProfileFormWrapper">
                    <div className="row">
                        <div className="col-md-4">
                            <div className={errors?.firstName ? 'formGroup validation-error' : 'formGroup validation-valid'}>
                                <label htmlFor="email">First Name</label>
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
                        <div className="col-md-4">
                            <div className={errors?.middleName ? 'formGroup validation-error' : 'formGroup validation-valid'}>
                                <label htmlFor="middleName">Middle Name</label>
                                <div className="rel">
                                    <input type="text" className="inputField" id="middleName" {...register("middleName")} />
                                    <span className={errors?.middleName ? 'error' : ''}></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
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
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={errors?.gender ? 'formGroup validation-error' : 'formGroup validation-valid'}>
                                <label htmlFor="email">Gender</label>
                                <div className="rel">
                                    <select {...register("gender")}>
                                        {['Male', 'Female', 'Others'].map((ele, index) => (<option key={index}>{ele}</option>))}
                                    </select>
                                    <span className={errors?.gender ? 'error' : ''}></span>
                                    <span className=""></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={errors?.dateOfBirth ? 'formGroup validation-error' : 'formGroup validation-valid'}>
                                <label htmlFor="email">Date of Birth</label>
                                <div className="rel">
                                    <input type="date" className="inputField" id="dob" {...register("dateOfBirth", { required: true })} />
                                    <span className={errors?.dateOfBirth ? 'error' : ''}></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="formGroup btnTopSpace btnCenterMyProfile">
                                <button type="submit" className="btn btn-warning btnFullMyProfile" disabled={!isDirty || !isValid} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MyProfile