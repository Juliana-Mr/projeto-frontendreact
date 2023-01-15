import React, { useState } from "react";
import { BarraNavegacaoStyle, ButtonStyle } from "./style";

function BarraNavegacao (){

    const [menor, setMenor] = useState("")
    const [maior, setMaior] = useState("")


    const onChangeMenorPreco =(event)=> {
        setMenor(event.target.value)
    } 
 
    const onChangeMaiorPreco = (event)=>{
        setMaior(event.target.value)
    } 

    const filtrarMenorValor = () =>{
        const menorValor = menor
        console.log(menorValor)
        setMenor("")
    }

    const filtrarMaiorValor = () => {
        const maiorValor = maior
        console.log(maiorValor)
        setMaior("")
    }


    return(
        <BarraNavegacaoStyle>
            FILTRAR POR:
            <label>
            menor preço
            <input onChange={onChangeMenorPreco} value={menor}/>
            </label>
            <ButtonStyle onClick={filtrarMenorValor}>filtrar</ButtonStyle>
            <label>
            maior preço
            <input onChange={onChangeMaiorPreco} value={maior}/>
            </label>
            <ButtonStyle onClick={filtrarMaiorValor}>filtrar</ButtonStyle>
           
        
        </BarraNavegacaoStyle>
    )
}

export default BarraNavegacao