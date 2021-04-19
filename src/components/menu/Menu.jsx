import React from 'react';
import './menu.scss';
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
        <aside>
            <span>
                <Link to="/registrar">Registrar</Link>
            </span>
            <span>
                <Link to="/consultar">Consultar</Link>
            </span>
        </aside>
    );
}
