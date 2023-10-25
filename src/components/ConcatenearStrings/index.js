
import { useState } from "react";

function ConcatenarString() {
  const [valorInput, setValorInput] = useState("");

  function obtenerValorInput(event) {
    console.log("obtenerValorInput");

    var valor_input = event.target.value;
    console.log(valor_input);

    setValorInput(valor_input);
  }

  return (
    <div
      style={{ marginTop: "50px", border: "solid 1px", marginBottom: "50px" }}
    >
      <h1>Lenguaje favorito</h1>

      <label>Escribe tu lenguaje de programción favorito</label>
      <input
        style={{ margin: "0 15px" }}
        onChange={(event) => obtenerValorInput(event)}
      />

      <p>{`Tu lenguaje de programación favorito es ${valorInput}`}</p>
    </div>
  );
}

export default ConcatenarString;









