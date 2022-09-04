import { IProfileDetails } from "../../models/profile/profile.interface"
import axiosServices from "../../sharedServices/axios.services"

export class ProfileService {
    public getProfileDetails = async () => {
        return axiosServices.get('profile/get-profile-details')
    }

    public setProfileDetails = async (profileDetails: IProfileDetails) => {
        return axiosServices.post('profile/set-profile-details', profileDetails)
    }
}