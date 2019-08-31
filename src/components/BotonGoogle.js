import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from '../initializers/firebase';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    
    login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/appstate')
        //provider.addScope('https://www.googleapis.com/auth/email')
        //provider.addScope('https://www.googleapis.com/auth/openid')
        provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
        provider.addScope('https://www.googleapis.com/auth/user.birthday.read')
        provider.addScope('https://www.googleapis.com/auth/userinfo.email')
        
        firebase.auth().signInWithPopup(provider).then(result=>{
            let user = {
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL
            }
            //let token = result.credential.accessToken;
            console.log("Inicio de sesión correcto: "+user.name);
        }).catch(err=>{
            console.error(err);
        })
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.login}>
                    Iniciar sesión con Google
                </Button>
            </div>
        );
    }
}