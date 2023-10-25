import { NavLink } from "react-router-dom";
import TarjetaNota from "../../components/TarjetaNota";

function Notas() {
  return (
    <div>
      <h1
        style={{ textAlign: "center", marginBottom: "50px", marginTop: "50px" }}
      >
        NOTAS
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <TarjetaNota
          titulo={"Que es React?"}
          texto={
            "React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y dinámicas en aplicaciones web"
          }
        />
        <TarjetaNota
          titulo={"Ques es jsx?"}
          texto={
            "es una extensión de JavaScript que se utiliza comúnmente en el desarrollo de aplicaciones web, especialmente en el contexto de bibliotecas y frameworks como React. JSX permite escribir código HTML de manera declarativa dentro de JavaScript, lo que facilita la creación de interfaces de usuario."
          }
        />
        <TarjetaNota />
      </div>
    </div>
  );
}

export default Notas;
