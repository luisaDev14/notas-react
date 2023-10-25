import { useState } from "react";

function ComponetWithState() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div style={{ border: "solid 1px" }}>
      <p>{`Cuenta: ${cuenta}`}</p>

      <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
      <button onClick={() => setCuenta(cuenta - 1)}>Disminuir</button>
    </div>
  );
}

export default ComponetWithState;