import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi';

function Header() {
    return (
        <div class="header">
            <Link to="/" class="botaoSair">Sair</Link>
            <div className="titulo-pesquisa">
                <h2 id="title">UX Helpers</h2>
                <BiSearch class="icon" />
                <form>
                    <input class="pesquisa" type="text" placeholder="Pesquisar..." />
                    <button class="btn" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    )
}

export default Header