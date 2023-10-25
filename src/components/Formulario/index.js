function Formulario() {

  var usuario_real = "webdev";
  var contrasena_real = "12345";
  
  function login(event) {
    //console.log("login");
    event.preventDefault();
    //obtener el formulario

    var formulario = event.target
    //console.log(formulario);

    //obtener elementos del formulario

    var elementos_formulario = formulario.elements
    //console.log(elementos_formulario);

    //obtener los inputs

    var input_usuario = elementos_formulario.user
    //console.log(input_usuario);

    var input_password = elementos_formulario.password
    //console.log(input_password);

    //valores de los input

    var valor_usuario = input_usuario.value
    var valor_password = input_password.value
    console.log(valor_usuario, valor_password);

    var comprobar_usuario = valor_usuario === usuario_real
    var comprobar_password = valor_password === contrasena_real
    console.log(comprobar_usuario, comprobar_password);

    var prueba_correcta = comprobar_usuario && comprobar_password

    if (prueba_correcta === true) {
      var mensaje_completo = `bienvenido ${usuario_real}`;
      console.log(mensaje_completo);
    } else {
      console.log("datos incorrectos, intentalo de nuevo");
    }

  }


  return (
    <form
      style={{
        margin: "auto",
        width: "538px",
        height: "604px",
        border: "solid 1px #D6D6D6",
        borderRadius: "26px",
        marginBottom: "50px",
        marginTop: "50px",
        paddingRight: "41px",
        paddingLeft: "41px",
        paddingTop: "63px",
      }}
      onSubmit={(event) => login(event)}
    >
      <div>
        <h1
          style={{
            fontSize: "35px",
            fontWeight: "600",
            margin: "0px",
            padding: "0px",
          }}
        >
          Login
        </h1>
        <p
          style={{
            fontSize: "25px",
            fontWeight: "400",
            margin: "0px",
            padding: "0px",
          }}
        >
          to get started
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          marginTop: "47px",
        }}
      >
        <input
          type="text"
          name="user"
          placeholder="User"
          style={{
            height: "66px",
            border: "solid 1px #EAEAEA",
            borderRadius: "10px",
            boxShadow: " 0px 10px 40px 0px rgba(174, 174, 174, 0.20)",
            paddingLeft: "26px",
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          style={{
            height: "66px",
            border: "solid 1px #EAEAEA",
            borderRadius: "10px",
            boxShadow: " 0px 10px 40px 0px rgba(174, 174, 174, 0.20)",
            paddingLeft: "26px",
          }}
        />
      </div>

      <p style={{ fontSize: "15px", fontWeight: "400", marginTop: "31px", marginBottom:"54px" }}>
        Forgot Password?
      </p>

      <button
        style={{
          width: "100%",
          height: "66px",
          border: "solid 1px #EAEAEA",
          borderRadius: "10px",
          backgroundColor: "#0016DF",
          color: "#fff",
          fontSize: "15px",
          fontWeight: "400",
        }}
      >
        Continue
      </button>

      <p style={{ fontSize: "15px", fontWeight: "400", textAlign:"center", marginTop:"54px" }}>
        New User?{" "}
        <span style={{ fontSize: "15px", fontWeight: "600" }}>Register</span>{" "}
      </p>
    </form>
  );
}

export default Formulario;
