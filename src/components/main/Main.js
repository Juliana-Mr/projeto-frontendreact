import React, {useState} from "react"
import BarraNavegacao from "../nav/BarraNavegacao"
import HomePage from "../homepage/HomePage"
import Carrinho from "../carrinho/Carrinho"
import { MainStyle } from "./style"


function Main (){

    const [comprar, setComprar] =useState("")

    return(
        <MainStyle>
            <BarraNavegacao/>
            <HomePage comprar={comprar} setComprar={setComprar}/>
            <Carrinho comprar={comprar} setComprar={setComprar}/>
            {/* <Carrinho comprar={comprar} setComprar={setComprar}/> */}
        </MainStyle>
    )
}

export default Main