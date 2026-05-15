import Logo from "url:../assets/logo.png";

const Title = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="Logo" />
    </div>
  );
};

const Navbar = () => {
  return (
    <ul className="nav-items">
      <li href="#">Home</li>
      <li>About</li>
      <li>contact us</li>
      <li>card</li>
    </ul>
  );
};
export const Auth = () => {
  return (
    <div>
      <button>Log In</button>
      <button>Sign Up</button>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <Navbar />
      {/* <Auth /> */}
    </div>
  );
};
export default HeaderComponent;
