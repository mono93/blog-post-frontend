import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IProfileResponse } from "../../models/profile/profile.interface";
import { ProfileService } from "../../services";

const MyProfile = () => {

    const { register, handleSubmit, setValue, formState: { errors, isDirty, isValid } } = useForm({ mode: "all" });
    const [profileData, setProfileData] = useState<IProfileResponse>({})

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (Object.keys(profileData).length > 0) {
            setValue('firstName', profileData?.user_first_name, { shouldDirty: false });
            setValue('middleName', profileData?.user_middle_name, { shouldDirty: false });
            setValue('lastName', profileData?.user_last_name, { shouldDirty: false });
            setValue('gender', profileData?.gender === "M" ? "Male" : profileData?.gender === "F" ? "Female" : "Others", { shouldDirty: false });
            setValue('dateOfBirth', profileData?.dob, { shouldDirty: false });
        }
    }, [profileData])

    const onSubmit = async (data: any) => {
        try {
            console.log(data)
        } catch (err) {
            alert('Something went wrong please try again!!')
        }
    }

    const fetchData = async () => {
        try {
            const res = await new ProfileService().getProfileDetails();
            setProfileData(res.data.data[0]);
        } catch (err) {
            alert('Something went wrong please try again!!')
        }
    }

    return (
        <div className="myProfileWrapper">
            <div className="mainTitle myProfileTitle" style={{ textAlign: 'center' }}>My Profile</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formWrapper myProfileFormWrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <input type="file" name="" id="" />
                        </div>
                    </div>
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
        </div >
    )
}

export default MyProfile