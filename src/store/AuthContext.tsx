import { createContext } from "react";

const initialState = {
    token: null
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
};


export const AuthContext = createContext({});
export { reducer, initialState }