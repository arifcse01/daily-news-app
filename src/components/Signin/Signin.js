import React, { useState, useContext } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



firebase.initializeApp(firebaseConfig);


const provider = new firebase.auth.GoogleAuthProvider();

const Signin = () => {
    const [newUser, setNewUser] = useState({
        isSignedIn: false
    });

    const [signedInUser, setSignedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleSignin = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signin = {
                    isSignedIn: true,
                    email: email,
                    name: displayName
                }
                setNewUser(signin);                
                setSignedInUser(signin);                
                history.replace(from)
            }).catch((error) => {
                const errorMessage = error.message;
            });

    }

    const style = {
        width: "300px",
        border: "1px solid #61acb3",
        borderRadius: "20px",
        background: "white",
        padding: "10px",
        marginTop: "20px"
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5 text-center">
                    <h2>Signin With Google Account</h2>
                    <input onClick={handleSignin} style={style} type="button" value="Continue With Google" />
                </div>
            </div>
        </div>
    );
};

export default Signin;