import produce from 'immer';
import { FormsTypes } from "./types";

const INITIAL_STATE = {
    nomeCompleto:"",
    cpf:"",
    telefone:"",
    email:"",
    endereco:"",
    numero:"",
    cep:"",
    bairro:"",
    cidade:"",
    estado:"",
    selectCats: [],
}

export default function ceps(state = INITIAL_STATE, action = null){
    return produce(state, newState => {
        switch (action.type) {
            case FormsTypes.SAVE_NAME_FORM:
                newState.nomeCompleto=action.payload.nomeCompleto
                break
            case FormsTypes.SAVE_PERSONAL_FORM:
                newState.nomeCompleto=action.payload.nomeCompleto
                newState.cpf=action.payload.cpf
                newState.telefone=action.payload.telefone
                newState.endereco=action.payload.endereco
                newState.numero=action.payload.numero
                newState.cep=action.payload.cep
                newState.bairro=action.payload.bairro
                newState.cidade=action.payload.cidade
                newState.estado=action.payload.estado
                
               break;
               case FormsTypes.GET_CAT_GALLERY_SUCCESS:
               newState.selectCats=action.payload
              break
            default:
                break;
                
        }
    }) 
}