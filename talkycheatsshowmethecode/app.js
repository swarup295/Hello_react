import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Applayout = () => {
  return (
    <>
      <HeaderComponent />
      <Home />
      <Footer />
    </>
  );
};
root.render(<Applayout />);
