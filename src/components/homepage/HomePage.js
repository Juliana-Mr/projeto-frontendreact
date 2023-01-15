import React, {useState} from "react";
import produtos from "../../produtos/produtos";
import InputBusca from "../input/InputBusca";
import { ConteinerStyle, CamisetaStyle } from "./style";


function HomePage (props){
    const [busca, setBusca] = useState("")


    // ISSO ABAIXO TERÁ DE MUDAR DE COMPONENTE, PORQUE É A FUNÇÃO DO ONCLICK DE CADA BOTÃO DO CARD DE PRODUTO 
    //VOU TER QUE COLOCAR NO DOCUMENTO "PRODUTOS"

    // const buscar = () => {
    //     const buscarCamiseta = props.comprar
    //     console.log(buscarCamiseta)
    // }

    const listaDeProdutos = produtos.map(
        (item)=>
        <CamisetaStyle>{item.nome} {item.foto} {item.valor} {item.botao}  </CamisetaStyle>
    )

    return(
        
        <div>
         <InputBusca busca={busca}  setBusca={setBusca}></InputBusca> 
        <ConteinerStyle>{listaDeProdutos}</ConteinerStyle>
        </div>
    )
}

export default HomePage





 
     
           