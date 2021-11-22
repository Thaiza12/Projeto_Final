import React from 'react';
import "./Home.css";
import imagem1 from '../assets/imagem1.png';
import imagem2 from '../assets/imagem2.png';
import imagem3 from '../assets/imagem3.png';
import logoImg from '../assets/logo.png';

// import { Container } from './styles';

function Home() {
  return (
  <div>
  
<div className="content">
            <div className="slides">
                <input className="slide-input" type="radio" checked name="slide" id="slide1"/>
                <input className="slide-input" type="radio" name="slide" id="slide2"/>
                <input className="slide-input" type="radio" name="slide" id="slide3"/>

                <div className="slide s1">
                    <a href=""><img src={imagem1} alt=""/></a>
                </div>
                <div className="slide">
                    <a href=""><img src={imagem2} alt=""/></a>
                </div>
                <div className="slide">
                    <img src={imagem3} alt=""/>
                </div>
                <div className="navigation">
                    <label className="bar" for="slide1"></label>
                    <label className="bar" for="slide2"></label>
                    <label className="bar" for="slide3"></label>
                </div>
            </div>
        </div>
        
         
  </div>
  );
}

export default Home;