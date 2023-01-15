import React from "react";
import { CarrinhoStyle } from "./style";
import imagem from "../../imagens/foguete.png"



function Carrinho (props){
    return(
        <CarrinhoStyle>
            {/* {props.comprar} */}
            <p>FOGUETINHO DE COMPRAS</p>
            <img src={imagem}/>
        </CarrinhoStyle>
    )
}

export default Carrinho