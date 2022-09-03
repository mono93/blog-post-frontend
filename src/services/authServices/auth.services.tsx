import { ISignupReqest } from "../../models"
import axiosServices from "../../sharedServices/axios.services"

export class AuthService {
    public signup = async (signupRequest: ISignupReqest) => {
        return axiosServices.post('auth/signup', signupRequest)
    }

    public emailVerify = async (email: string) => {
        return axiosServices.post('auth/email-verify', { 'user_email': email })
    }

    public isUserAvailable = async (email: string) => {
        return axiosServices.get('auth/is-user-available-for-login', { 'params': { email: email } })
    }
}