// import React, { useState } from "react";
import { InputBuscaStyle, ButtonStyle } from "./style";
import React from "react";


function InputBusca(props){

// console.log(props)
// const [busca, setBusca] = useState("")

    const onChangeBusca= (event)=>{
        props.setBusca(event.target.value)
    }

    const buscar= () => {
        const buscarItem = props.busca
        console.log(buscarItem)
        props.setBusca("")
    }


    return(
        <>
        <InputBuscaStyle>
        O QUE VOCÊ PROCURA?
        <input onChange={onChangeBusca} value={props.busca}/>
        <ButtonStyle onClick={buscar}>buscar</ButtonStyle>
        </InputBuscaStyle>
       
        </>
    )
}

export default InputBusca