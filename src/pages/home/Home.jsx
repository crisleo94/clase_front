import React from 'react';
import Menu from '../../components/menu/Menu';
import Navbar from '../../components/navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import MyRouter from '../../Router';
import './home.scss';

export default function Home() {
    return (
        <Router>
            <div className="container">
                <div className="navbar">
                    <Navbar title="Home" />
                </div>
                <div className="menu">
                    <Menu />
                    <div className="main">
                        <MyRouter />
                    </div>
                </div>
            </div>
        </Router>
    );
}
