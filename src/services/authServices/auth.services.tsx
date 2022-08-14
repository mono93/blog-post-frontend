import { ISignupReqest } from "../../models"
import axiosServices from "../../sharedServices/axios.services"

export class AuthService {
    public signup = async (signupRequest: ISignupReqest) => {
        return axiosServices.post('user/signup', signupRequest)
    }

    public emailVerify = async (email: string) => {
        return axiosServices.post('user/email-verify', { 'user_email': email })
    }
}