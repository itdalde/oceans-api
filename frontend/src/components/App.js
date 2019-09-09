import React from "react";
import ReactDOM from "react-dom";
const App = () => (
    <div>
        React Layout 
    </div>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;