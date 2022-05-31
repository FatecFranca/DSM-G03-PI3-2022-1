import React, { useContext, useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import api from '../../api';

export default function SignUp() {

    
    const navigate = useNavigate();
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [notify, setNotify] = useState('');

    

    async function handleSubmit (e) {
        e.preventDefault();
        console.log(fullname + email + password)

        if(fullname == '' || email == '' || confirmEmail == '' || password == '' || confirmPassword == '') {
            setNotify('Campos não preenchidos');
        } else {
            const isLogged = await api.post('user/login',{email, password});
            console.log(isLogged)
            if(isLogged) {
                navigate("/home");
                localStorage.setItem('x-access-token', isLogged.data.token)
            } else{
                setNotify('Não Autorizado.');
            }
        }
    }

    

    return (
        <div className="signUpForm">
        <form  onSubmit={handleSubmit} id="container-signUp">
           <h3 className="signUp-titulo">Bem Vindo ao UX-Helpers</h3>
              <input
                    type="text" 
                    placeholder="Nome Completo"
                    id="signUp-fullName"
                    name="fullname"
                    value={fullname}
                    onChange={e => setFullName(e.target.value)}
                    />
              <input
                    type="text" 
                    placeholder="E-mail"
                    id="signUp-email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
              <input
                    type="text" 
                    placeholder="Confirme seu e-mail"
                    id="signUp-email"
                    name="confirmEmail"
                    //value={confirmEmail}
                    //onChange={e => setEmail(e.target.value)}
                    />
              <input 
                    type="password" 
                    placeholder="Password" 
                    id="signUp-password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}                    
                    />
              <input 
                    type="password" 
                    placeholder="Confirme seu password" 
                    id="signUp-password"
                    name="confirmPassword"
                    //value={confirmPassword}
                    //onChange={e => setPassword(e.target.value)}                    
                    />
              <input
                    type="checkbox"
                    id="signUp-checkbox"
                    name="checkbox"
                    lable="Ao clicar em Criar conta, eu concordo que li e aceito os Termos de uso e a Política de privacidade."
                    
                    />
              <input id="signUp-botao" type="submit" value="Cadastrar" />
              <h2 className ="notify">{ notify }</h2>                
        </form>  
      </div>
    )
}







