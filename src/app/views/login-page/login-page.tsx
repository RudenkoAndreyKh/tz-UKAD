import React, { useState } from 'react';
import Button from '../../shared/components/button';
import Input from '../../shared/components/input';
import './styles.scss';
import houseImg from "../../assets/house.png";
import { login, signUp } from '../../services/auth.service';
import { useAlert } from 'react-alert';
import { isLoginValid, isPasswordValid } from '../../shared/helpers/login-validator';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        login: '',
        password: ''
    });
    const [isSubmitted, setSubmit] = useState(false);
    const alert = useAlert();
    const invalid = !isLoginValid(credentials.login) || !isPasswordValid(credentials.password);
    const history = useHistory();

    const submit = () => {
        setSubmit(true);
        if (invalid) {
            return
        }

        login(credentials)
            .then(res => {
                if (res.data.success === true) {
                    localStorage.setItem('token', JSON.stringify(res.data.data.accessToken));
                    history.push('/');
                }
                if (res.data.status !== 401) {
                    alert.show('Wrong credentials.');
                }
            })
    }

    const register = () => {
        setSubmit(true);
        if (invalid) {
            return
        }
        signUp(credentials)
            .then(res => {
                if (res.data.success === true) {
                    alert.show('You successfuly created an account!');
                }
                if (res.data.status !== 409) {
                    alert.show('User with such login already registered.');
                }
            })
    }

    return (
        <div className="login-page">
            <div className="image-container">
                <img src={houseImg} alt='login page' />
            </div>
            <div className="animated-modal-part">
                <div className="login-form">
                    <label className="login-label">Login</label>
                    <Input
                        error={!isLoginValid(credentials.login) && isSubmitted}
                        errorText="Provide valid login"
                        labelText="Login"
                        onTextChange={(login) => setCredentials({ ...credentials, login })}
                        value={credentials.login}
                    />
                    <Input
                        error={!isPasswordValid(credentials.password) && isSubmitted}
                        errorText="Provide valid password"
                        type="password"
                        labelText="Password"
                        onTextChange={(password) => setCredentials({ ...credentials, password })}
                        value={credentials.password}
                    />
                    <Button
                        disabled={invalid && isSubmitted}
                        onClick={submit}
                        text="login"
                        containerStyle="submit-button"
                    />
                    <span className="forgot-password">forgot password?</span>
                    <span onClick={register} className="register">Register in one click</span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;