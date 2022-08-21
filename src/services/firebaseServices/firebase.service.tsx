import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    checkActionCode,
    applyActionCode,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    verifyPasswordResetCode,
    confirmPasswordReset
} from "firebase/auth";

const firebaseConfig = {
    authDomain: "fir-auth-6edd8.firebaseapp.com",
    projectId: "fir-auth-6edd8",
    storageBucket: "fir-auth-6edd8.appspot.com",
    messagingSenderId: "904760319835",
    appId: "1:904760319835:web:44fd0d957f114b4e51447e",
    measurementId: "G-Q4TYKH9GG7",
};

const app = initializeApp({ ...firebaseConfig, apiKey: process.env.REACT_APP_FIREBASE_API_KEY });
const auth = getAuth(app);

export class FirebaseService {

    public handleVerifyEmail = async (actionCode: string) => {
        try {

            await checkActionCode(auth, actionCode);
            await applyActionCode(auth, actionCode);
            return auth.currentUser!.email

        } catch (err: any) {
            throw new Error(err);
        }
    };

    public handlePasswordChange = async (actionCode: string, password: string) => {
        try {

            await verifyPasswordResetCode(auth, actionCode);
            await confirmPasswordReset(auth, actionCode, password);
            return true

        } catch (err: any) {
            throw new Error(err);
        }
    };

    public registerWithEmailAndPassword = async (email: string, password: string) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(res.user)
            return res.user;
        } catch (err) {
            throw new Error("User Already Exist");
        }
    };

    public logInWithEmailAndPassword = async (email: string, password: string) => {
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (err: any) {
            throw new Error(err);
        }
    };

    public logout = () => signOut(auth);


    public sendPasswordReset = async (email: string) => {
        try {
            await sendPasswordResetEmail(auth, email);
            return true
        } catch (err: any) {
            throw new Error(err);
        }
    };

}