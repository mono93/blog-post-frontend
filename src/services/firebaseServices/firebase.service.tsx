import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);

export class FirebaseService {
    public logInWithEmailAndPassword = async (email: string, password: string): Promise<any> => {
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (err: any) {
            throw new Error(err);
        }
    };

    public logout = () => {
        signOut(auth);
    };

    public sendPasswordReset = async (email: string) => {
        try {
            await sendPasswordResetEmail(auth, email);
            return true
        } catch (err: any) {
            console.error(err);
            throw new Error(err);
        }
    };

}