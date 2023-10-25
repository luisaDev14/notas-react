import { useEffect, useState } from "react";

function AumentarDisminuir() {
  const [aumentar, setAumentar] = useState(0);

  useEffect(() => {
    console.log("Montaje");

    return () => console.log("Desmontaje");
  }, []);

  

  useEffect(() => {
   console.log("Actualizacion aumentar", aumentar);
  }, [aumentar]);

  return (
    <div style={{ margin: "50px 0px" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "solid 1px",
          borderRadius: "10px",
          margin: "auto",
          backgroundColor: "violet",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>{aumentar}</h1>
        <div
          style={{
            border: "solid 1px",
            width: "150px",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "purple",
          }}
        >
          <button
            style={{
              width: "70px",
              borderRadius: "0px 4px 4px 0px",
              border: "none",
            }}
            onClick={() => setAumentar(aumentar + 5)}
          >
            Aumentar
          </button>
          <button
            style={{
              width: "70px",
              borderRadius: "4px 0px 0px 4px",
              border: "none",
            }}
            onClick={() => setAumentar(aumentar - 5)}
          >
            Reducir
          </button>
        </div>
      </div>
    </div>
  );
}

export default AumentarDisminuir;
