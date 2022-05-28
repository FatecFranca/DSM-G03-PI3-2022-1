import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import apiget from "../apiget";
import { useEffect, useState } from "react";
import axios from "axios";



function Glossary() {
    const [entry, getGlossary] = useState([])
    const url = 'http://localhost:3000/'

    useEffect(() => {
        getAllGlossary();
    }, []);

    const getAllGlossary = () => {
        axios.get(`${url}glossary`)
        .then((response) => {
            console.log(url)
            const AllGlossary = response.data 
            console.log(AllGlossary)
            
            getGlossary(AllGlossary)
        })
            .catch(error => console.error(`Erro: ${error}`))
    }
   
    


    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="App-header">

                <h1>Aqui o Glossario</h1>
                <p> está puxando o glossário (ver console), mas como colocar aqui?
                </p>


            </main>
            <Footer />
        </div>
    )
}
export default Glossary