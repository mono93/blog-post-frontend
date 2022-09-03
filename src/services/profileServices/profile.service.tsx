import axiosServices from "../../sharedServices/axios.services"

export class ProfileService {
    public getProfileDetails = async () => {
        return axiosServices.get('profile/get-profile-details')
    }
}