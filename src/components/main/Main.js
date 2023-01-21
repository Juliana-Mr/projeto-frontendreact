import React, { useState } from "react"
import BarraNavegacao from "../nav/BarraNavegacao"
import HomePage from "../homepage/HomePage"
import Carrinho from "../carrinho/Carrinho"
import { MainStyle } from "./style"


function Main (){

    const [busca, setBusca] = useState('')

    const [menorValor, setMenorValor] = useState(-Infinity)

    const [maiorValor, setMaiorValor] = useState(Infinity)
    
    const [ordenacao, setOrdenacao] = useState('title')
    return(
        <MainStyle>
            <BarraNavegacao 
            menorValor={menorValor}  
            setMenorValor={setMenorValor}
            maiorValor={maiorValor}
            setMaiorValor={setMaiorValor}
            ordenacao={ordenacao}
            setOrdenacao={setOrdenacao}/>
            <HomePage 
            busca={busca} 
            setBusca={setBusca}
            menorValor={menorValor}  
            maiorValor={maiorValor}
            ordenacao={ordenacao}
            />
            <Carrinho/>
        </MainStyle>
    )
}

export default Main