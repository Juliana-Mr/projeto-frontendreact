import React, { useState } from "react";
import produtos from "../../produtos/produtos";
import InputBusca from "../input/InputBusca";
import { ConteinerStyle, CamisetaStyle } from "./style";


function HomePage ({busca,setBusca, menorValor, maiorValor, ordenacao}){

  
    const onChangeBusca =(event)=>{
        setBusca(event.target.value)
    }
        

    const listaDeProdutos = produtos
        .filter((item)=>{
            return item.valor >= menorValor || menorValor === ""
        })
        .filter((item)=>{
            return item.valor <= maiorValor || maiorValor === ""
        })
        .filter((item)=>{
            return item.nome.toLowerCase().includes(busca.toLowerCase())
        })
        .sort((valorAtual, proximoValor)=>{
            switch(ordenacao){
                case "asc":
                    return valorAtual.valor - proximoValor.valor
                case "desc":
                    return proximoValor.valor - valorAtual.valor 
                default:
                    return valorAtual.nome.localeCompare(proximoValor.nome)
            }
        })
        .map((item)=>
        <CamisetaStyle> {item.nome} {item.foto} {item.valor} {item.botao}  </CamisetaStyle>
    )

    return(
        
        <div>
         <InputBusca 
         busca = {busca}
         onChangeBusca= {onChangeBusca}/>
        <ConteinerStyle>{listaDeProdutos}</ConteinerStyle>
        </div>
    )
}


export default HomePage





 
     
           