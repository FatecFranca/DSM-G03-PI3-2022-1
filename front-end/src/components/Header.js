import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div class="header">
            <Link to="/" class="botaoSair">Sair</Link>
            <div className="titulo-pesquisa">
                <h2 id="title">UX Helpers</h2>
                <input id="pesquisa"type="text" name="Pesquisar" placeholder="Pesquisar"></input>
            </div>
        </div>
    )
}
export default Header