import { useState } from "react";

function CambiarColor() {
   const [color, setColor] = useState("red");

    return(
        <div style={{marginTop:"50px", marginBottom:"50px"}}>

            <div style={{background:color, width:"100px",height:"100px", borderRadius:"100%", marginBottom:"15px" }}></div>

            <button onClick={()=> setColor("green")} style={{marginRight:"20px"}}>CAMBIAR A VERDE</button>
            <button onClick={()=> setColor("red")}>CAMBIAR A ROJO</button>
             
        </div>
    )
}

export default CambiarColor;