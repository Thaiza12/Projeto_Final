
import React from 'react';
import gato1 from '../assets/gato1.jpg';
import gato2 from '../assets/gato2.jpg';
import gato3 from '../assets/gato3.jpg';
import gato4 from '../assets/gato4.jpg';
import gato5 from '../assets/gato5.jpg';
import gato6 from '../assets/gato6.jpg';
import './Gallery.css';
import Form from './Form';

function mostrarMenssagem (){
  alert ('A página está em construção.')
}




function Gallery() {
  return (  
  <div className="container">
    <div className="grid-container">
      <div className="grid-iten">
        <div className="zoom">
         {/*} <img src="" alt="gato1" />*/}
          <img src={gato1} alt="gato1" /> 
        </div>
        
        <div className="legenda">
          <h2 className="titulo-galeria">Adote a Olenka</h2>

          <br/><br/>

           <p className="descricao-galeria">
            <p>Fêmea</p>
            <p> Sem raça definida </p> 
            <p> 1 Ano</p>
            <p> No abrigo desde: 05/11/2020 </p> 
            </p>
        </div>
        <br />
        <div>    
            
          <button className="buttons" type="button" onClick={()=> mostrarMenssagem ()}> Conheça a minha história</button> 
            <button className="submit" type="submit" onclick="window.location.href='/Form.js'" >Quero adotar</button> 
        </div>
      </div>
      <div className="grid-iten">
        <div className="zoom">
         {/*} <img src="./Galeria/Gatos/Gato 2.jpg" alt />*/}
         <img src={gato2} alt="gato2" /> 
        </div>
        <div className="legenda">
          <h2 className="titulo-galeria">Adote a Deyse</h2>

          <br/><br/>

          
          <p className="descricao-galeria">
            <p> Fêmea</p>
            <p>Sem raça definida</p>
            <p>3 Anos</p>
            <p> No abrigo desde: 03/01/2021</p>
          </p>
        </div>
        <br /> 
        
          <div>
          <button className="buttons" type="button"onClick={()=> mostrarMenssagem ()} >Conheça a minha história</button> 
            <button className="submit" type="submit" >Quero adotar</button> 
          </div>
        </div>
      
      <div className="grid-iten">
        <div className="zoom">
          {/*<img src="./Galeria/Gatos/gato 3.jpg" alt />*/}
          <img src={gato3} alt="gato3" /> 
        </div>
        <div className="legenda">
          <h2 className="titulo-galeria">Adote a Sofia</h2>

          <br/><br/>


          <p className="descricao-galeria">
            <p>Fêmea</p>
            <p>Sem raça definida</p>
            <p>6 Meses</p>
            <p> No abrigo desde: 01/06/2021 </p>
          </p>
        </div>
        <br />
       
          <div>
          <button className="buttons" type="button"onClick={()=> mostrarMenssagem ()} >Conheça a minha história</button> 
            <button className="submit" type="submit" >Quero adotar</button> 
          </div>
        </div>
      
      <div className="grid-iten">
        <div className="zoom">
          {/*<img src="./Galeria/Gatos/gato001.jpg" alt />*/}
          <img src={gato4} alt="gato3" /> 
        </div>
        <div className="legenda">
          <h2  className="titulo-galeria">Adote o Pantera</h2>

          <br/><br/>

          <p className="descricao-galeria">
            <p>Macho</p>
            <p>Sem raça definida</p>
            <p>2 Anos</p>
            <p>No abrigo desde: 11/08/2019</p>
          </p>
        </div>
        <br />
        
          <div >
          <button className="buttons" type="button" onClick={()=> mostrarMenssagem ()}>Conheça a minha história</button> 
            <button className="submit" type="submit" >Quero adotar</button> 
          </div>
        </div>
      
      <div className="grid-iten">
        <div className="zoom">
        {/*}  <img src="./Galeria/Gatos/gato 5.jpg" alt />*/}
        <img src={gato5}  alt="gato5" /> 
        </div>
        <div className="legenda">
          <h2  className="titulo-galeria">Adote o Feliz</h2>

          <br/><br/>


          <p className="descricao-galeria">
            <p>Macho</p>
            <p>Sem raça definida </p>
            <p>8 Meses</p>
            <p>No abrigo desde: 17/03/2021</p>
          </p>
        </div>
        <br />
          <div >
          <button className="buttons" type="button"onClick={()=> mostrarMenssagem ()} >Conheça a minha história</button> 
            <button className="submit" type="submit" >Quero adotar</button> 
          </div>
        </div>
      
      <div className="grid-iten" id>
        <div className="zoom">
          {/*<img src="./Galeria/Gatos/gato 6.jpg" alt />*/}
          <img src={gato6} alt="gato6" /> 
        </div>
        <div className="legenda">
          <h2  className="titulo-galeria">Adote o Pitter</h2>

          <br/><br/>


          <p className="descricao-galeria">
            <p>Macho</p>
            <p>Sem raça definida</p>
            <p>4 Anos</p>
            <p>No abrigo desde: 04/03/2021</p>
          </p>
        </div>
        <div>
            <button className="buttons" type="button" onClick={()=> mostrarMenssagem ()}>Conheça a minha história</button> 
            <button className="submit" type="submit" >Quero adotar</button> 
        </div>
        </div>
      </div>
      </div>

    
  
  
     
    

  );
}

export default Gallery;
