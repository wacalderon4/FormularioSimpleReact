import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { dom } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
var form = React.createElement(
  "form",
  { action: "" },
  <h2>Formulario de Registro</h2>,
  <i class=" fa fa-id-card"></i>,
  <div class="input-container">
    <i class="fa fa-user icon" aria-hidden="true"></i>
    <input
      class="input-field"
      type="text"
      placeholder="Nombre de usuario"
      name="usrnm"
    />
  </div>,
  <div class="input-container">
    <i class="fa fa-envelope icon"></i>
    <input
      class="input-field"
      type="text"
      placeholder="Correo Electrónico"
      name="email"
    />
  </div>,
  <div class="input-container">
    <i class="fa fa-key icon"></i>
    <input
      class="input-field"
      type="password"
      placeholder="Contraseña"
      name="psw"
    />
  </div>,
  <button type="submit" class="btn">
    <strong>Regístrate</strong>
  </button>
);

ReactDOM.render(
  <div class="form">{form}</div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
dom.watch();
reportWebVitals();
