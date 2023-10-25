import TarjetaNota from "../../components/TarjetaNota";

function Ejemplos() {
    return(
        <div>
      <h1 style={{textAlign:"center", marginBottom:"50px", marginTop:"50px"}}>EJEMPLOS</h1>

      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"20px" }}>
        <TarjetaNota/>
        <TarjetaNota/>
        <TarjetaNota/>
      </div>
    </div>
    )
}

export default Ejemplos;