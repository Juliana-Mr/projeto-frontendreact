import { InputBuscaStyle} from "./style";
import React from "react";


function InputBusca({busca,onChangeBusca}){

    return(
        <>
        <InputBuscaStyle>
        O QUE VOCÊ PROCURA?
        <input 
        onChange={onChangeBusca} 
        value={busca}/>
        </InputBuscaStyle>
       
        </>
    )
}

export default InputBusca