import React from 'react';
import { KeyboardArrowDown, NotificationImportant, PresentToAll, Search } from '@material-ui/icons';

import './styles.css';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"/>
            </div>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Mais recentes</li>
                    <li>A minha lista</li>
                </ul>
            </nav>
            <div className="userIcon">
                <Search color="#FFF" className="search" />
                <h4 className="child">Criança</h4>
                <PresentToAll color="#FFF" className="gift" />
                <NotificationImportant color="#FFF" className="notification" />
                <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"/>
                <KeyboardArrowDown color="#FFF" />
            </div>
        </header>
    )
}