import React from 'react';
import logoImg from '../assets/logo.png';
import gatitoPaw from '../assets/gatitoPaw.png';
import "./Certificates.css"
import { useDispatch, useSelector } from 'react-redux';
// import { Container } from './styles';

function Certificates()  {
  const { 
    nomeCompleto,  
    cpf, 
    endereco,
  } = useSelector(state => state.forms)
  return (
     <>
    <div className="background">
    <div className="fundo-branco">
          <img  className="logo-cert" src={logoImg} alt="Be The Hero" />
         <header id="cabecalho"/>

        <h1 className="titulo-cert">Certificado de Adoção</h1>
            <h3 className="text-cert">Obrigado por fazer o bem ! </h3>
            <h4 className="subtext-cert">CERTIFICAMOS QUE {nomeCompleto} CPF {cpf}</h4>  
              <h4 className="subtext-cert">QUE RESIDIR NO ENDEREÇO {endereco}</h4>
                    <h4 className="subtext-cert"> ADOTOU O GATINHO MAICON </h4>  
         <div>
             
         </div>                   
        <div className="pata">
            <img className="paw-cert" src={gatitoPaw} alt="pata"/>
        </div>
          <div className="border">
        </div>
        <footer>
            <h3>INSTITUTO ADOTE UM GATINHO</h3>
             </footer>
         
    </div>
    <div id="parte_imagem"/>
    </div>
    </>
  )
}

export default Certificates;