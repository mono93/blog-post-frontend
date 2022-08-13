import {setupInterceptorsTo} from "./Interceptors";
import axios from "axios";
export default setupInterceptorsTo(axios.create())


    