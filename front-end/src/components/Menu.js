import { Link } from 'react-router-dom'
import './Components.css'

function Menu() {
    return (
        <aside>
            <ul>
                <li><Link to="/glossario">Glossario</Link></li>
                <li><Link to="/questoes">Questões</Link></li>
                <li><a href="#">Avaliações</a></li>
            </ul>
        </aside>
    )
}
export default Menu

