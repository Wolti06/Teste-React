/*function ComponenteNome() {
   return (
       <div>
            <p>Nome : CLAUS</p>
       </div>

    );
  }
 export { ComponenteNome };
*/

/*import {useState} from "react"

function ComponenteNome() {

    const [nome,setNome] = useState("SEU NOME");

    return (
        <div>
            <button onClick={() => setNome("CLAUS WOLTMANN")} >Alterar para apelido</button>
            <button onClick={() => setNome("CLAUS")} >Alterar para Nome</button>

            <p> Nome: {nome}</p>
        </div>

    );

}
export {ComponenteNome};
*/

import { useEffect, useState} from "react"

function ComponenteNome(){

    const [nome,setNome] = useState("SEU NOME");

    useEffect(()=>{

        alert(`O alterado o nome para ${nome}`)
    }, [nome])
    return (
        <div>
            <button onClick={() => setNome("CLAUS WOLTMANN")} >Alterar para apelido</button>
            <button onClick={() => setNome("CLAUS")} >Alterar para Nome</button>

            <p> Nome: {nome}</p>
        </div>

    );

}
export {ComponenteNome};
