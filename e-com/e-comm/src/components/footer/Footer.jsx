import logo from "../../assets/images/eco-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div>
          <h2>TechSofa</h2>
          <p>since 2003</p>
        </div>
      </div>
      <p className="lorem">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
        excepturi alias tempora maiores ad porro mollitia animi nemo voluptatem
        itaque.
      </p>
    </>
  );
}

export default Footer;
