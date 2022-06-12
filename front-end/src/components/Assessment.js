import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import api from '../api'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import VLibras from '@djpfs/react-vlibras';

function Assessment() {
    const { id } = useParams()
    const navigate = useNavigate();
    const [assessment, getAssessment] = useState(([]))
    const [assessmentId, getAssessmentId] = useState('')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [user, setUser] = useState('62a12f4204126eddb08cc7c4'); //localStorage?
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
            <main className="content-avaliacao">
                {/* <p>precisei tirar o filtro de usuario no controller, entender está exibindo os assessments de todos usuarios</p> */}
                <form onSubmit={handleSubmit} id="container-avaliacao">
                    <h3>Nova Avaliação</h3>
                    <input
                        type="text"
                        placeholder="Título da avaliação"
                        id="avaliacao-titulo"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Descrição da Avaliação"
                        id="avaliacao-descricao"
                        name="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <div>
                        <ul>
                            <input id="criar-avaliacao" type="submit" value="Criar" />
                        </ul>
                    </div>
                    <h2 className="notify">{notify}</h2>
                </form>

                <div>
                    {assessment.map(avaliacao => (
                        <div class="cardQuestion">
                            <h2>{avaliacao.title}</h2>
                            <p>{avaliacao.description}</p>
                            <div>
                                <ul>
                                <Link id="btn-avaliacao" to={`/avaliacao/${avaliacao._id}`}>Abrir Avaliação</Link><br />
                                </ul>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </main>
            <Footer />
            <VLibras forceOnload={true} />
        </div>
    )
}

export default Assessment
