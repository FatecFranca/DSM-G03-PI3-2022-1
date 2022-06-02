import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import { useEffect, useState } from "react";
import axios from "axios";

function Assessment() {
    const [assessment, getAssessment] = useState(([]))
    const url = 'http://localhost:3000/'

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
               


                <div>
                    <p>precisei tirar o filtro de usuario no controller, entender está exibindo os assessments de todos usuarios</p>
                    {assessment.map(avaliacao => (
                        <div class="cardGroup">
                            <h2>{avaliacao.title}</h2>
                            <h3>{avaliacao.description}</h3>
                            <form>
                                <button>Responder</button>
                                <button>Ver Respostas</button>
                            </form>
                
                            
                        </div>
                    ))}
                </div>


            </main>

            <Footer />
        </div>
    )
}
export default Assessment