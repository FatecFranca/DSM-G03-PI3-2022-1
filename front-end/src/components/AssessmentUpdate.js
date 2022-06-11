import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import api from '../api'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

function AssessmentUpdate() {
    const { id } = useParams()
    const navigate = useNavigate();
    const [assessment, getAssessment] = useState(([]))
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [idAssessment, setIdAssessment] = useState(sessionStorage.getItem('assessment'));

    const [user, setUser] = useState('627da16564fbd6c660162c17'); //localStorage?
    const [notify, setNotify] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        console.log(title + description)
        localStorage.getItem('x-acess-token')

        if(title == '' && description == '') {
            setNotify('Por favor informe o título e a url da sua avaliação');
        } else {
            const {data} = await api.put(`assessment`, { id, title, description, user });
            console.log(data)
            if(data) {
                navigate("/questoes");
            } else {
                setNotify('Ops não conseguimos editar a avaliação');
            }
        }
    }

    useEffect(() => {
        api.get(`assessment/${id}`)
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
                    <h4 className="login-titulo">Editar Avaliação {assessment.title}</h4>
                    <input
                        type="text"
                        placeholder={assessment.title}
                        id="login-email"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={assessment.description}
                        id="login-password"
                        name="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <div>
                        <ul>
                            <input id="btn-respostas" type="submit" value="Alterar" />
                        </ul>
                    </div>
                    <h2 className="notify">{notify}</h2>
                </form>

               
            </main>
            <Footer />
        </div>
    )
}
export default AssessmentUpdate
