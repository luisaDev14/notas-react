function SimpleCard(props) {
  return (
    <div>
      <h2>Componente SimpleCard</h2>

      <p>{`SimpleCard ${props.number}`}</p>

      <p>{`Name: ${props.nombre}`}</p>

      <p>{`Ciudad: ${props.ciudad}`}</p>

      <p>{`Color favorito: ${props.color}`}</p>

      <p>{`Animal favorito: ${props.animal}`}</p>
    </div>
  );
}

export default SimpleCard;
