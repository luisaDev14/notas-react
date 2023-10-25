import { useState } from "react";

function ArregloEnReact() {
    const [frutas, setFrutas] = useState(["sandia", "mango", "durazno", "uva", "kiwi"]);

    function agregarFruta(){
    var copia_frutas = [...frutas];
   
    copia_frutas.push("pera");
    setFrutas(copia_frutas);

    }

    return(
        <div>
            <p>{`LISTA DE FRUTAS: ${frutas}`}</p>

            <button onClick={() => agregarFruta()}>agregar</button>
            <button >sacar</button>
        </div>
    )
}

export default ArregloEnReact;