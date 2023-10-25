import { NavLink } from "react-router-dom";

function TarjetaNota(props) {
  return (
    <div
      className="tarjeta-nota"
      style={{
        width: "499px",
        height: "400px",
        borderRadius: "24px",
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.08) ",
        paddingBottom: "37px",
        paddingTop: "37px",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <p
        style={{
          fontSize: "24px",
          fontWeight: "400",
          color: "#6E7491",
          textAlign: "center",
          paddingLeft: "46px",
          paddingRight: "46px",
        }}
      >
        {props.titulo}
      </p>

      <p
        style={{
          color: "#8A9CA7",
          fontWeight: "500",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        NOTAS
      </p>

      {/* <h2
        style={{
          color: "#1D5B99",
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "500",
          marginBottom: "16px",
        }}
      >
        How to perform Responsive Testing for a Locally Hosted Website?
      </h2> */}

      <p
        style={{
          color: "#414F58",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "400",
          paddingLeft: "55px",
          paddingRight: "55px",
        }}
      >
        {props.texto}
      </p>

      <NavLink>
        <div
          style={{
            textAlign: "center",
            color: "#3098F",
            fontSize: "20px",
            fontWeight: "600",
            marginTop: "37px",
          }}
        >
          <p>Ver Mas</p>
        </div>
      </NavLink>
    </div>
  );
}

export default TarjetaNota;
