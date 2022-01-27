import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, } from "firebase/auth";


// firebase app starting
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // regiister a user
    const registerUser = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //signed in
                const user = userCredential.user;
                setAuthError('');
                // creating user
                const newUser = { email, name }
                // send name to firebase
                setUser(newUser);

                //save user to the database
                saveUser(email, name, 'POST');
                // update the profile
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    
                }).catch((error) => {
                    
                })
                // redirect user to homepage
                history.replace('/');
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage);
                console.log(errorMessage);
            })
            .finally(()=>setIsLoading(false));
    }
// end of regiister a user
    
    // login user using the email and password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = userCredential.user;
                setAuthError('');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(()=>setIsLoading(false));;
    }
    // end of login user using the email and password

    // google login

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

// observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
                // ...
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])
    
 //end of observe user
    
    useEffect(() => {
        fetch(`https://vast-thicket-90925.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);
    // log out user
    const logout = () => {
        signOut(auth).then(() => {
            //sign-out successful
        }).catch((error) => {
            //an error occurred
        })
        .finally(() => setIsLoading(false));

    }

    const saveUser = (email,displayName, method) => {
        const user = { email, displayName };
        fetch('https://vast-thicket-90925.herokuapp.com/users', {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then()
    }
    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
}
export default useFirebase;