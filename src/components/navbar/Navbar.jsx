import React from 'react';
import PropTypes from 'prop-types';
import './navbar.scss';
import {Link} from 'react-router-dom';

export default function Navbar({title}) {
    return (
        <nav>
            <Link to="/">
                <img
                    src="https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_026_cat_black_witch_halloween-128.png"
                    alt="logo"
                />
            </Link>
            <h1>{title}</h1>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
};
