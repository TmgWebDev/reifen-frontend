import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import LandingPage from "./components/LandingPage/LandingPage";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "firebase/auth";
import { AuthProvider } from "./lib/firebase/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LandingPage />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
