export interface ISignupReqest {
    usedId          : string;
    firstName       : string;
    lastName        : string;
    email           : string;
    dateOfBirth     : string;
    gender          : string;
    signupProvider  : string;
}

export interface IFirebaseLoginResponse {
    displayName     : string;
    email           : string;
    expiresIn       : string;
    idToken         : string;
    kind            : string;
    localId         : string;
    refreshToken    : string;
    registered      : boolean;
}