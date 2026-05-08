// import React from "react";
import ReactDOM from "react-dom/client";
// const heading1 = React.createElement("h1", { className:"swa"}, "hello")
//  const heading2 = React.createElement("h2", {}, "come")
//  const heading3 = React.createElement("h3", {}, "bye")
//  const wrapper = React.createElement("div", {}, [heading1, heading2, heading3])
//  const root = ReactDOM.createRoot(document.getElementById("root"))
//  root.render(wrapper)
// //  console.log(root);

//  const test = React.createElement("h2", {
//      id: "test",
//      style: {
//          color: "red", backgroundColor: "#000"
//      }
//  }, "you")
//  const root2 =ReactDOM.createRoot(document.getElementById("root"))
//  root.render(test)
//  console.log(test);

// const heading = (
//   <div id="title" key="h1">
//     <h1 style={{ fontSize: "100px", color: "red" }}>Hola</h1>
//   </div>
// );

const Logo = () => {
  return <h1>swarup</h1>;
};

const HeaderComponent = () => {
  return (
    <div>
      <Logo />
      <ul>
        <li className="swa">home</li>
        <li>home</li>
        li
      </ul>
    </div>
  );
};

import React from "react";

function app() {
  return <div>app</div>;
}

export default app;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
