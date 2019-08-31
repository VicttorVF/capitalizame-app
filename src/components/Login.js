import React, {Component} from 'react';
import firebase from '../initializers/firebase';

export default class Login extends Component {

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
    }l

    render () {
        return (
            <div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
						<form className="login100-form validate-form">
							<span className="login100-form-title p-b-49">
								Inicia sesión
							</span>

							<div className="wrap-input100 validate-input m-b-23">
								<span className="label-input100">Usuario</span>
								<input className="input100" type="text" name="username" placeholder="Ingresa tu usuario"/>
							</div>

							<div className="wrap-input100 validate-input">
								<span className="label-input100">Contraseña</span>
								<input className="input100" type="password" name="pass" placeholder="Ingresa tu contraseña"/>
							</div>
							
							<div className="text-right p-t-8 p-b-31">
								<a href="/">
									¿Olvidaste tu contraseña?
								</a>
							</div>

							<div className="container-login100-form-btn">
								<div className="wrap-login100-form-btn">
									<div className="login100-form-bgbtn"></div>
									<button className="login100-form-btn">
										Iniciar sesión
									</button>
								</div>
							</div>

							<div className="txt1 text-center p-t-54 p-b-20">
								<span>
									O ingresa usando
								</span>
							</div>

							<div className="flex-c-m">
								<button href="/" className="login100-social-item bg1">
									<i className="fa fa-facebook"></i>
								</button>

								<button href="/" className="login100-social-item bg2">
									<i className="fa fa-twitter"></i>
								</button>

								<button onClick={this.login} type="button" className="login100-social-item bg3">
									<i className="fa fa-google"></i>
								</button>
							</div>

							<div className="flex-col-c p-t-155">
								<span className="txt1 p-b-17">
									¿No tienes una cuenta?
								</span>

								<a href="/" className="txt2">
									Registrate
								</a>
							</div>

						</form>
					</div>
				</div>
			</div>
        );
    }

}