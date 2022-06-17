import { Link } from 'react-router-dom'
import './Menu.css';
import '../Components.css'

import { useState } from 'react';






function Menu() {

    const [active, setMode] = useState(false);

    const ToggleMode = () =>{
        setMode(!active)

    }

    return (
        <div class="menu">
            <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
                <div className='hamburguer hamburguerIcon'></div>
            </div>
            <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
                <div className='list'>
                    <ul className='listItems'>
                        <li class="topo"><Link to="/home" class="menuitem">Principal</Link></li>
                        <li><Link to="/avaliacoes" class="menuitem">Avaliações</Link></li>
                        <li><Link to="/questoes" class="menuitem">Questões</Link></li>
                        <li><Link to="/glossario" class="menuitem">Glossário</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
export default Menu