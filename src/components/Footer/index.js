import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        paddingLeft: "75px",
        paddingRight: "75px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:"#ADC0FF"
      }}
    >
      <h2>Desarrollado por:malu</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <NavLink to={"/"}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="92"
              viewBox="0 0 92 92"
              fill="none"
            >
              <path
                d="M45.6773 16C28.7369 16 15 29.7345 15 46.6773C15 60.2315 23.79 71.7306 35.9791 75.7871C37.5122 76.071 38.0752 75.1216 38.0752 74.3113C38.0752 73.5799 38.0465 71.1631 38.0335 68.5997C29.4988 70.4555 27.698 64.9802 27.698 64.9802C26.3025 61.4343 24.2918 60.4916 24.2918 60.4916C21.5086 58.5876 24.5016 58.6265 24.5016 58.6265C27.5822 58.8431 29.2044 61.788 29.2044 61.788C31.9404 66.4779 36.3809 65.1219 38.1315 64.3383C38.4067 62.3553 39.2019 61.0022 40.0791 60.2361C33.2654 59.4602 26.1023 56.8298 26.1023 45.0752C26.1023 41.7261 27.3008 38.9893 29.2633 36.841C28.9447 36.0682 27.8948 32.9481 29.5604 28.7225C29.5604 28.7225 32.1365 27.898 37.9989 31.8671C40.4458 31.1872 43.0702 30.8465 45.6773 30.835C48.2844 30.8465 50.9108 31.1872 53.3624 31.8671C59.2178 27.898 61.7903 28.7225 61.7903 28.7225C63.46 32.9481 62.4096 36.0682 62.091 36.841C64.0579 38.9893 65.2482 41.7258 65.2482 45.0752C65.2482 56.8577 58.0716 59.4523 51.2406 60.2116C52.3409 61.1636 53.3213 63.0307 53.3213 65.8926C53.3213 69.9971 53.2857 73.3008 53.2857 74.3113C53.2857 75.1276 53.8379 76.0842 55.3931 75.783C67.5754 71.722 76.3543 60.227 76.3543 46.6773C76.3543 29.7345 62.6194 16 45.6773 16Z"
                fill="#161614"
              />
            </svg>
          </div>
        </NavLink>

        <NavLink to={"/"}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="40"
              viewBox="0 0 54 40"
              fill="none"
            >
              <path
                d="M3.63545 40H12.1182V19.3992L0 10.3105V36.3646C0 38.3762 1.62989 40 3.63545 40Z"
                fill="#4285F4"
              />
              <path
                d="M41.2031 40H49.6858C51.6975 40 53.3213 38.3702 53.3213 36.3646V10.3105L41.2031 19.3992"
                fill="#34A853"
              />
              <path
                d="M41.2031 3.64576V19.3994L53.3213 10.3108V5.46349C53.3213 0.967648 48.1892 -1.59534 44.5962 1.10095"
                fill="#FBBC04"
              />
              <path
                d="M12.1172 19.3991V3.64551L26.659 14.5519L41.2008 3.64551V19.3991L26.659 30.3055"
                fill="#EA4335"
              />
              <path
                d="M0 5.46349V10.3108L12.1182 19.3994V3.64576L8.72508 1.10095C5.12598 -1.59534 0 0.967648 0 5.46349Z"
                fill="#C5221F"
              />
            </svg>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
