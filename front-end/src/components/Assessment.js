import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import api from '../api'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

function Assessment() {
    const { id } = useParams()
    const navigate = useNavigate();
    const [assessment, getAssessment] = useState(([]))
    const [assessmentId, getAssessmentId] = useState('')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [user, setUser] = useState(sessionStorage.getItem('userId')); //localStorage?
    const [notify, setNotify] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        console.log(title + description)

        if(title == '' && description == '') {
            setNotify('Por favor informe o título e a url da sua avaliação');
        } else {
            const newAssessement = await api.post('assessment', { title, description, user });
            console.log(newAssessement)
            if(newAssessement) {
                navigate("/questoes");
            } else {
                setNotify('Ops não conseguimos criar uma nova avaliação');
            }
        }
    }

    useEffect(() => {
        api.get(`assessment`)
            .then((response) => {
                localStorage.getItem('x-acess-token')
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
                    <h4 className="login-titulo">Nova Avaliação</h4>
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
                        <div class="cardQuestion">
                            <h2>{avaliacao.title}</h2>
                            <h3>{avaliacao.description}</h3>
                            <div>

                                <Link to={`/avaliacao/${avaliacao._id}`}>Abrir Avaliação</Link><br/>

                            </div>
                        </div>
                    ))
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Assessment
