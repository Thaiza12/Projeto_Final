import React from 'react';
import logoImg from '../../assets/logo.png';
import {Link} from "react-router-dom"
import "./styles.css";

// import { Container } from './styles';

function Header() {
  return(
<>
<header className="header">
                <Link className="a1" to="./home.html">
                <img src={logoImg} alt=""/>
                </Link>
                <nav>
                    <ul className="menu">
                        <li>
                          <Link  className="button-menu" to="/">Home</Link>
                        </li>
                        <li>
                          <Link className="button-menu" to="/Gallery">Galeria</Link>
                        </li>
                        <li>
                          <Link className="button-menu" to="/form/1">Quero adotar</Link>
                        </li>
                    </ul>
                </nav>
            </header> 
</>
  );
}

export default Header;