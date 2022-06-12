import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import Footer from "../Footer/Footer"
import './AssessmentUpdate.css'
import api from '../../api'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import VLibras from '@djpfs/react-vlibras';

function AssessmentUpdate() {
    const { id } = useParams()
    const navigate = useNavigate();
    const [assessment, getAssessment] = useState(([]))
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [idAssessment, setIdAssessment] = useState(sessionStorage.getItem('assessment'));
    const [user, setUser] = useState('62a12f4204126eddb08cc7c4'); //localStorage?
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
                
                <form onSubmit={handleSubmit} id="container-avaliacao">
                    <h3>Editar Avaliação {assessment.title}</h3>
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
                            <input id="btn-update" type="submit" value="Alterar" />
                            <h4 className="notify">{notify}</h4>
                        </ul>
                    </div>
                </form>

               
            </main>
            <Footer />
            <VLibras forceOnload={true} />
        </div>
    )
}
export default AssessmentUpdate
