import { Link } from 'react-router-dom'
import './Components.css'

function Menu() {
    return (
        <aside class="menu">
            <ul>
                <li><Link to="/home" class="menuitem">Principal</Link></li>
                <li><Link to="/avaliacoes" class="menuitem">Avaliações</Link></li>
                <li><Link to="/questoes" class="menuitem">Questões</Link></li>
                <li><Link to="/glossario" class="menuitem">Glossário</Link></li>
            </ul>
        </aside>
    )
}
export default Menu