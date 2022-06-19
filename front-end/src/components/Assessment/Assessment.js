import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import Footer from "../Footer/Footer"
import './Assessment.css';
import '../Components.css'
import api from '../../api'
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
                <div id="nova-avaliacao">
                    <form onSubmit={handleSubmit} id="container-avaliacao">
                        <h2>Nova Avaliação</h2>
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
                                <input id="criar-avaliacao" type="submit" value="Criar" />
                        </div>
                        <h4 className="notify-avaliacao">{notify}</h4>
                    </form>
                </div>
                <div id="avaliacoes">
                    {assessment.map(avaliacao => (
                        <div class="cardQuestion-avaliacao">
                            <h2>{avaliacao.title}</h2>
                            <p>{avaliacao.description}</p>
                            <Link id="btn-avaliacao" to={`/avaliacao/${avaliacao._id}`}>Abrir Avaliação</Link>
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
