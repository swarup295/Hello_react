const Logo = () => {
  return <h1>WIGGY</h1>;
};

const Navbar = () => {
  return (
    <ul className="header">
      <li>Home</li>
      <li>About</li>
      <li>contact us</li>
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
      <Logo />
      <Navbar />
      <Auth />
    </div>
  );
};
export default HeaderComponent;
