import { useState } from "react";

function MostrarOcultarMensaje() {
   const [color, setColor] = useState("black");
   const [display, setDisplay] = useState("flex");
   const [frutas, setFrutas] = useState(["sandia", "mango", "durazno", "uva", "kiwi"]);

    return(
     <div>
        <h1 style={{color:color, display:display}}>Mostrar Ocultar Mensaje</h1>
        <p>{`TOTAL DE FRUTAS: ${frutas.length}`}</p>

        <button onClick={() => setDisplay("flex")}>Mostrar</button>
        <button onClick={() => setDisplay("none")}>Ocultar</button>
     </div>
    )
}

export default MostrarOcultarMensaje;