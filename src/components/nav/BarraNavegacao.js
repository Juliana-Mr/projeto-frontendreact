import React from "react";
import { BarraNavegacaoStyle, SelectStyle } from "./style";

function BarraNavegacao ({menorValor, setMenorValor,maiorValor,setMaiorValor,ordenacao, setOrdenacao}){


    const onChangeMenor = (event) => {
        setMenorValor(event.target.value)
    }

    const onChangeMaior = (event) => {
        setMaiorValor(event.target.value)
    }

    const onChangeOrdenacao =(event) => {
        setOrdenacao(event.target.value)
    }

    return(
        <BarraNavegacaoStyle>
            FILTRAR POR:
            <label>
            menor preço
            <input
            type = "number"
            onChange={onChangeMenor}
            value={menorValor}
            />
            </label>
            <label>
            maior preço
            <input
            type = "number"
            onChange={onChangeMaior}
            value={maiorValor}
            />
            </label>
            ordenação
            <label>
            <SelectStyle
            value={ordenacao}
            onChange={onChangeOrdenacao}
            >
            <option value={"asc"}>Crescente</option>
            <option value={"desc"}>Decrescente</option>
            <option value={"title"}>Alfabética</option>
            </SelectStyle>
           </label>
        
        </BarraNavegacaoStyle>
    )
}

export default BarraNavegacao