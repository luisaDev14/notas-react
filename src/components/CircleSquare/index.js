import { useState } from "react";

function CircleSquare() {
  const [borderRadius, setBorderRadius] = useState("0");

  return (
    <div>
      {/*Forma */}

      <div
        style={{
          backgroundColor: "red",
          width: "200px",
          height: "200px",
          marginBottom: "20px",
          borderRadius: borderRadius,
        }}
      ></div>

      {/*BOTONES */}

      <button onClick={() => setBorderRadius("100%")}>CIRCULO</button>
      <button onClick={() => setBorderRadius("0")}>CUADRADO</button>
    </div>
  );
}

export default CircleSquare;
