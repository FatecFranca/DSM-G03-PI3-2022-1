import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div class="header">
            <Link to="/" class="botaoSair">Sair</Link>
            <div className="titulo-pesquisa">
                <h2 id="title">UX Helpers</h2>
                <i class="fa fa-times" id="clear-val" aria-hidden="true"></i>
                <input id="pesquisa"type="text" name="Pesquisar" placeholder="Pesquisar"></input>
                <button class="btn" type="submit">Pesquisar</button>   
            </div>
        </div>
    )
}
export default Header