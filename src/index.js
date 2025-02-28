import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import store from "./store";
import { ThemeContext } from "./ThemeContext";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import "./assets/css/montserrat.css";
import "./assets/css/fontello.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeContext>
                <Normalize />
                <GlobalStyles />
                <App />
            </ThemeContext>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
