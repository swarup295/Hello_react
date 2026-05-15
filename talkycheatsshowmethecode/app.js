/** 
 * Header 
 *   -logo
 *   -Nav items
 * Body 
 *   -search bar
 *   -Reaturent list
 *      -Reaturent card
 *         -name
 *         -image
 *         -star rating
 *         -price
 *  Footer
 *     -Related links
 *     -copyright


*/

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

// const swarup = (
//   <>
//     <h1>hello</h1>
//     <h2>hii</h2>
//   </>
// );
const styleobj = { backgroundColor: "red" };

const swarup = (
  <div style={styleobj}>
    <h1>hello</h1>
    <h2>hii</h2>
  </div>
);
root.render(<Applayout />);
