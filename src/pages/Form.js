import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import "./Form.css";
import { useFormik, } from "formik";
import { savePersonalForm} from "../store/ducks/forms/actions";
import ibge from "../api/ibge"
import viaCep from "../api/viaCep"
import logoImg from '../assets/logo.png';
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
nomeCompleto: Yup.string().required(( "Campo obrigatório" )), 
email: Yup.string().email().required(("Campo obrigatório" )),
cpf: Yup.string().required(("Campo obrigatório" )),
telefone: Yup.string().required(("Campo obrigatório" )),
endereco: Yup.string().required(("Campo obrigatório")),
  numero: Yup.number().required(("Campo obrigatório")),
  cep: Yup.number().required(("Campo obrigatório")),
  bairro: Yup.string().required(("Campo obrigatório")),
  cidade: Yup.string().required(("Campo obrigatório")),
  estado: Yup.string().required(("Campo obrigatório")),
})


export default function Form() {
  const [ufs, setUfs] = useState([]);
  const [selectUfs, setSelectUfs] = useState("");
  const { 
    nomeCompleto,  
    cpf, 
    telefone, 
    email,
    endereco,
    numero,
    cep,
    bairro,
    cidade,
    estado,
  } = useSelector(state => state.forms)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik=useFormik({
   initialValues:{
    nomeCompleto,
    cpf,
    telefone,
    email,
    endereco,
    numero,
    cep,
    bairro,
    cidade,
    estado,
  },
  validationSchema,
  onSubmit:(values)=>{
    dispatch(savePersonalForm(values))
    navigate("/certificates")
  }

});

useEffect(() => {
  ibge.get('estados').then((response) => {
    const ufInitials = response.data.map((uf) => uf.sigla);

      setUfs(ufInitials);
  });
}, []);


return (

  <>
  <h1 id="titulo">Formulário de Adoção</h1>
  <div className="container">
    <form id="formulario" onSubmit={formik.handleSubmit}>
      <br/> <br/>
      <img  src={logoImg} alt="Be The Hero" />
      <div className="informacao">
        <ul className="criterios">
          <p >Para adotar um dos nossos gatinhos você deverá:</p>
          <br/> 
            
          <li>Ser maior de idade;</li>
          <li> Morar na região metropolitana do Recife; </li>
          <li>Ter condições financeiras para os custos da criação do gatinho.</li>
            <p>(custear vacinas,vermifugação,e veterinários sempre que necessário.); </p> 
          <li>preencher o formulário a seguir.</li>
        </ul>
      </div>
      <input className="espaco"
        id="nomeCompleto"
        name="nomeCompleto"
        type="text"
        placeholder="Nome Completo"
        value={formik.values.nomeCompleto}
        onChange={formik.handleChange}
      />
    
      <p className="erro">{formik.errors.nomeCompleto}</p>

      <input  className="espaco"
        id="cpf"
        name="cpf"
        type="text"
        placeholder="CPF"
        onChange={formik.handleChange}
        value={formik.values.cpf}
      />
      <p className="erro">{formik.errors.cpf}</p>
        <input  className="espaco"
        id="email"
        name="email"
        type="text"
        placeholder="E-mail"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <p className="erro">{formik.errors.email}</p>
          <input  className="espaco"
          id="telefone"
          name="telefone"
          type="text"
          placeholder="Telefone"
          onChange={formik.handleChange}
          value={formik.values.telefone}
        />
        <p className="erro">{formik.errors.telefone}</p>

        <input
        className="espaco"
          id="endereco"
          name="endereco"
          type="text"
          placeholder="Endereço"
           value={formik.values.endereco}
           onChange={formik.handleChange}
          />
          <p className="erro">{formik.errors.endereco}</p>
          <input
          className="espaco"
           id="numero"
           name="numero"
           type="text"
           placeholder="número"
            value={formik.values.numero}
            onChange={formik.handleChange}
          />
          <p className="erro">{formik.errors.numero}</p>
          <input
          className="espaco"
            id="cep"
            name="cep"
            type="text"
            placeholder="CEP"
            onChange={formik.handleChange}
            value={formik.values.cep}
          />
          <p className="erro">{formik.errors.cep}</p>
           <input
           className="espaco"
           id="bairro"
           name="bairro"
           type="text"
           placeholder="Bairro"
            onChange={formik.handleChange}
            value={formik.values.bairro}
          />
          <p className="erro">{formik.errors.bairro}</p>
          <select
              className="espaco"
              id="estado"
              name="estado"
              type="text"
              placeholder="Estado"
              onChange={formik.handleChange}
              value={formik.values.estado}
            >
              <option value="0">Selecione uma UF</option>
                                {ufs.map(uf =>(
                                    <option key={uf} value={uf}>{uf}</option>
                                ))}
            </select>
            
            <p className="erro">{formik.errors.estado}</p>
            <input
              className="espaco"
              id="cidade"
              name="cidade"
              type="text"
              placeholder="Cidade"
              onChange={formik.handleChange}
              value={formik.values.cidade}
            />
        
            <p className="erro">{formik.errors.cidade}</p>
            

        <button className="button-form" type="submit">
            Finalizar
        </button>
        
        <section>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#0a4e9b" />
            Não quero me cadastrar agora
          </Link>

        </section>  
    </form>
  </div>

     </>
  );
}
