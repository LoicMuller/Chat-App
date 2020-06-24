import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA8_JZKNdbBlsUq9pwyGE5Hwtp7KRu3uAc",
    authDomain: "chat-app-2f850.firebaseapp.com",
    databaseURL: "https://chat-app-2f850.firebaseio.com",
    projectId: "chat-app-2f850",
    storageBucket: "chat-app-2f850.appspot.com",
    messagingSenderId: "837716965229",
    appId: "1:837716965229:web:e75bf44dcb4ab01b6a0c64"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    // SIGN UP
    signUpUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password)
    
    // SIGN IN 
    signInUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password)

    // SIGN OUT
    signOutUser = () => this.auth.signOut()

    // RESET PASSWORD
    passwordReset = email => this.auth.sendPasswordResetEmail(email);
}

export default Firebase;