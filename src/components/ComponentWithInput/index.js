function ComponentWithInput() {

    function ObtenerValorInput(event) {
        console.log("ObtenerValorInp");

        var valor_input = event.target.value
        console.log(valor_input);
    }

    return(
       <div>
        <label>Escribe una palabra</label>
        <input onChange={(event) => ObtenerValorInput(event)}/>
       </div>
    )
}

export default ComponentWithInput;