import React, { useContext, useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import api from '../../api';

export default function Login() {

    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notify, setNotify] = useState('');

    

    async function handleSubmit (e) {
        e.preventDefault();
        console.log(email + password)

        if(email == '' && password == '') {
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
        <div className="signinForm">
        <form  onSubmit={handleSubmit}>
           <h3>LogIn</h3>
              <input
                    class= "" 
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
              <input type="submit" value="Login" />
              <a href="#" className="forgot">Esqueceu a senha?</a>
              <h2 className ="notify">{ notify }</h2>                
        </form>  
      </div>
    )
}







