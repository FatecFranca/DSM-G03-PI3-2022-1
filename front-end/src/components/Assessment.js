import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import api from '../api'
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Assessment() {
    const url = 'http://localhost:3000/'
    const [assessment, getAssessment] = useState(([]))
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [user, setUser] = useState('627da16564fbd6c660162c17'); //
    const [notify, setNotify] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(title + description)

    if (title == '' && description == '') {
        setNotify('Por favor informe o título e a url da sua avaliação');
    } else {
        const newAssessement = await api.post('assessment', { title, description, user });
        console.log(newAssessement)
        if (newAssessement) {
            navigate("/questoes");
        } else {
            setNotify('Ops não conseguimos criar uma nova avaliação');
        }
    }
}

    useEffect(() => {
        axios.get(`${url}assessment`)
            .then((response) => {
                console.log(url)
                getAssessment(response.data)
                console.log(response.data)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
            <p>precisei tirar o filtro de usuario no controller, entender está exibindo os assessments de todos usuarios</p>
                    <form onSubmit={handleSubmit} id="container-login">
                <h3 className="login-titulo">Bem Vindo ao UX-Helpers</h3>
                <input
                    type="text"
                    placeholder="Título da avaliação"
                    id="login-email"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descrição da Avaliação"
                    id="login-password"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <div>
                    <ul>
                        <input id="login-entrar" type="submit" value="Criar" />
                    </ul>
                </div>
                <h2 className="notify">{notify}</h2>
            </form>

                <div>
               
                    {assessment.map(avaliacao => (
                        <div class="cardGroup">
                            <h2>{avaliacao.title}</h2>
                            <h3>{avaliacao.description}</h3>
                            
                
                            
                        </div>
                    ))}
                </div>


            </main>

            <Footer />
        </div>
    )
}
export default Assessment
/*
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
                    Este novo site será chamado de UX-HELPERS, que vai abranger esse espaço e tentar inovar com as ferramentas e conhecimentos existentes, observando as normas e conceitos para as avaliações.
                </p>
            </main> 
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
                        <input href="#" id="login-cadastrar" type="submit" value="Cadastrar" />
                        <input id="login-entrar" type="submit" value="Login" />
                    </ul>
                </div>
                <a href="#" className="forgot">Esqueceu a senha?</a>
                <h2 className="notify">{notify}</h2>
            </form>
        </div>
    )
}

*/





