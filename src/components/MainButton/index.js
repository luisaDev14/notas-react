import { NavLink } from "react-router-dom";

function MainButton(props) {
  return (
    <NavLink to={props.href} style={{ textDecoration: "none" }}>
      <div
        style={{
          width: "200px",
          height: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "32px",
          backgroundColor: props.bg,
          fontWeight:"700",
        }}
      >
        {props.text}
      </div>
    </NavLink>
  );
}

export default MainButton;
