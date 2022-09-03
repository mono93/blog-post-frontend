import { createContext, useReducer } from 'react';
import { IFirebaseLoginResponse } from '../models';
import * as ActionTypes from './actions/actionTypes';

const firebaseLoginResponse: IFirebaseLoginResponse = {
    displayName: "",
    email: "",
    expiresIn: "",
    idToken: "",
    kind: "",
    localId: "",
    refreshToken: "",
    registered: false,
}


const AuthReducer = (state: any, action: any) => {
    const { type, value } = action;

    switch (type) {
        case ActionTypes.LOGIN:
            return {
                ...value,
            };
        case ActionTypes.LOGOUT:
            return {
                displayName: "",
                email: "",
                expiresIn: "",
                idToken: "",
                kind: "",
                localId: "",
                refreshToken: "",
                registered: false,
            };
        default:
            return state;
    }
};

interface IAuthContextType {
    state: IFirebaseLoginResponse;
    dispatch: React.Dispatch<{ type: string; value: any }>;
}


const AuthContext = createContext<IAuthContextType | null>(null);

function AuthProvider(props: any) {
    const [state, dispatch] = useReducer(AuthReducer, firebaseLoginResponse);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };