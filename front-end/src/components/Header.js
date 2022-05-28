import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
  
        <div class="header">
            <Link to="/" class="botaoSair">Sair</Link>
            <h2 class="title">UX Helpers</h2>
            Helping your inteface!
        </div>
    )
}
export default Header