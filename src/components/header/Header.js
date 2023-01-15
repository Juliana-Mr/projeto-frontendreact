import React from "react";
import { HeaderStyle } from "./style";
import imagem from "../../imagens/alien.png";


function Header (){
    return(
        <HeaderStyle> 
            <h1>ABDUÇÃO</h1>
            <img src={imagem}/>
        </HeaderStyle>
    )
}
export default Header