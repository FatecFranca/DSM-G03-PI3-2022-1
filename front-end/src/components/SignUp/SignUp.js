import React, { useContext, useState, useRef }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import api from '../../api';

import { VscEyeClosed, VscEye } from 'react-icons/vsc'

export default function SignUp() {

    
    const navigate = useNavigate();
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    //const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [confirmPassword, setConfirmPassword] = useState('');
    const [notify, setNotify] = useState('');

    //***************MOSTRAR SENHA****************************************
    const inputRef = useRef(null);
    const [eyeIsClosed, setEyeState] = useState(false);    

    const toggleShow = () => {
        if(inputRef.current.type === "password"){
            setEyeState(true)
            inputRef.current.type = "text";
        } 
        else {
            setEyeState(false)
            inputRef.current.type = "password"
        }
    };
    //********************************************************************** */

    async function handleSubmit (e) {
        e.preventDefault();
        console.log(fullname + email + password)

        if(fullname === '' || email === '' || password === '') {
            setNotify('Campos não preenchidos');
        } else {
            const signUp = await api.post('user/',{fullname, email, password});
            console.log(signUp)
            if(signUp) {
                navigate("/home");
                localStorage.setItem('x-access-token', signUp.data.token)
            } else {
                setNotify('Usuário não cadastrado.');
            }
        }
    }

    return (
        <div className="signUpForm">
        <form  action="" onSubmit={handleSubmit} id="container-signUp">
           <h3 className="signUp-titulo">Junte-se aos UX-Helpers</h3>
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
              {/* <input
                    type="text" 
                    placeholder="Confirme seu e-mail"
                    id="signUp-email"
                    name="confirmEmail"
                    //value={confirmEmail}
                    //onChange={e => setEmail(e.target.value)}
                    /> */}
              
                <div id="divSenha">    
                    <input 
                        ref={inputRef}
                        type="password" 
                        placeholder="Senha" 
                        id="signUp-password"  
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}                    
                        />
                    <button onClick={toggleShow}>{eyeIsClosed ? <VscEyeClosed /> : <VscEye/>}</button>
                </div>
              {/* <input 
                    type="password" 
                    placeholder="Confirme sua senha" 
                    id="signUp-password"
                    name="confirmPassword"
                    //value={confirmPassword}
                    //onChange={e => setPassword(e.target.value)}                    
                    /> */}
              <div>
                  <ul id="signUp-checkbox">
                    <input
                      type="checkbox"                            
                      name="checkbox"       
                      checked                          
                      />
                      Ao clicar em Criar Conta, eu concordo que li e aceito os <br></br>
                      Termos de uso e a Política de privacidade
                  </ul>  
              </div>
                
              <input id="signUp-botao" type="submit" value="Criar Conta" />
              <h2 className ="notify">{ notify }</h2>                
        </form>  
      </div>
    )
}