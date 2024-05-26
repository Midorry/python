import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/css/styles.css";
import "./assets/css/global.css";
// import "./assets/css/bootstrap.min.css";
// import "./assets/css/font-awesome.min.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/nice-select.css";
import "./assets/css/jquery-ui.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/slicknav.min.css";
import "./assets/js/jquery-3.3.1.min.js";
import "./assets/js/jquery-ui.min.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
