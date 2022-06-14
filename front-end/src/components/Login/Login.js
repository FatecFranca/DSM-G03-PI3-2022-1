import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import '../Components.css'
import api from '../../api';
import VLibras from '@djpfs/react-vlibras';

export default function Login() {

    const url = 'http://localhost:3000/'
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, getUser] = (([]))
    const [notify, setNotify] = useState('');



    async function handleSubmit(e) {
        e.preventDefault();
        console.log(email + password)
        if (email == '' || password == '') {
            setNotify('Campos não preenchidos');
            alert('Senha ou email não preenchidos')
        } else {
            const isLogged = await api.post('user/login', { email, password });
            console.log(isLogged)
            if (isLogged) {
                navigate("/home");
                localStorage.setItem('x-access-token', isLogged.data.token)
                let users = await api.get("user/")
                sessionStorage.setItem('userId', users[0]._id)

            } else {
                setNotify('Não Autorizado.');
            }
        }
    }



    return (
        <div className="signinForm">
            <main className="content-login">
                <h1>Sobre o UX Helpers</h1>
                <h3>Projeto desenvolvido para ajudar profissionais de UX e designers</h3>
                <p>
                    O Ergolist foi um site criado no Brasil com o intuito de ajudar os profissionais responsáveis pela avaliação de sistemas e sites. Detalhava como cada item tinha que ser feito, respondido cada questionário e, no final, mostrava o resumo das avaliações.
                </p>
                <p>
                    Contudo, o Ergolist apresentava alguns pontos a serem melhorados e não se sabe porque foi tirado do ar por seus criadores e colaboradores, que não lançaram mais nenhuma versão do projeto. Muitos que o utilizavam, ficaram sem uma ferramenta que lhes prestasse auxílio neste ramo.
                </p>
                <p>
                    Assim, a fim de preencher uma lacuna deixada pela extinção do Ergolist, surge a possibilidade de criação de uma ferramenta, baseada no Ergolist, porém corrigindo os erros ora existentes e oferecendo a possibilidade de criação de uma rede de negócios entre avaliadores e donos/gestores de sistemas, uma vez que nessa nova ferramenta haverá a funcionalidade disponível de deixar avaliações salvas em um espaço público.
                </p>
                <p>
                    Este novo site será chamado de UX HELPERS, que vai abranger esse espaço e tentar inovar com as ferramentas e conhecimentos existentes, observando as normas e conceitos para as avaliações.
                </p>
            </main>
            <form onSubmit={handleSubmit} id="container-login">
                <h3 className="login-titulo">Bem-vindo ao UX Helpers</h3>
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
                <div class="botao-login">
                    <ul>
                        <Link to="/cadastro" id="login-cadastrar" type="submit" value="Cadastrar">Cadastrar</Link>
                        <input id="login-entrar" type="submit" value="Entrar" />
                    </ul>
                </div>
                <a href="#" className="forgot">Esqueceu a senha?</a>
                <h2 className="notify">{notify}</h2>
            </form>
            <VLibras forceOnload={true} />
        </div>
    )
}