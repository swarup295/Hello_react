       import React from "react"
       import ReactDOM from "react-dom/client"
       const heading1 = React.createElement("h1", {key:"s", className:"swa"}, "hello")
        const heading2 = React.createElement("h2", {key:"f"}, "bye")
        const heading3 = React.createElement("h3", {key:"h"}, "come")
        const wrapper = React.createElement("div", {key:"j"}, [heading1, heading2, heading3])
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(wrapper)

        // const test = React.createElement("h2", {
        //     id: "test",
        //     style: {
        //         color: "red", backgroundColor: "#000"
        //     }
        // }, "you")
        // const root =ReactDOM.createRoot(document.getElementById("root"))
        // root.render(test)
        // console.log(test);
