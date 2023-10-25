import MainButton from "../MainButton";

function Main() {
  return (
    <div
      style={{
        paddingTop: "107px",
        paddingBottom: "107px",
        paddingLeft: "100px",
        paddingRight: "100px",
        display: "flex",
        flexDirection: "row",
        gap: "114px",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor:"#eef2ff"
      }}
    >
      <div style={{ width: "476px" }}>
        <h1
          style={{ fontSize: "80px", fontWeight: "600", marginBottom: "30px" }}
        >
          I’m a Header
        </h1>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "400",
            color: "#2D2D2D",
            marginBottom: "41px",
          }}
        >
          This is a template landing page, created with Figma and Anima. No
          coding involved.
        </p>

        <div style={{ display: "flex", gap: "30px" }}>
          <MainButton text={"Notas"} bg={"#f268a9"} href={"/notas"} />

          <MainButton text={"Ejemplos"} bg={"#A3D2E1"} href={"/ejemplos"} />
        </div>
      </div>

      <div
        style={{
          width: "500px",
          background: "#C4C4C4",
          height: "400px",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
}

export default Main;
