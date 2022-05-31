import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import api from '../../api';

export default function Login() {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notify, setNotify] = useState('');



    async function handleSubmit(e) {
        e.preventDefault();
        console.log(email + password)

        if (email == '' && password == '') {
            setNotify('Campos não preenchidos');
        } else {
            const isLogged = await api.post('user/login', { email, password });
            console.log(isLogged)
            if (isLogged) {
                navigate("/home");
                localStorage.setItem('x-access-token', isLogged.data.token)
            } else {
                setNotify('Não Autorizado.');
            }
        }
    }



    return (
        <div className="signinForm">
            <form onSubmit={handleSubmit} id="container-login">
                <h3 className="login-titulo">Bem Vindo ao UX-Helpers</h3>
                <input
                    type="text"
                    placeholder="email"
                    id="login-email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="login-password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div>
                    <ul>
                        <input href="SignUp/SignUp" id="login-cadastrar" type="submit" value="Cadastrar" />
                        <input id="login-entrar" type="submit" value="Login" />
                    </ul>
                </div>
                <a href="#" className="forgot">Esqueceu a senha?</a>
                <h2 className="notify">{notify}</h2>
            </form>
        </div>
    )
}







