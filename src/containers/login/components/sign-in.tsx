import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../redux/login/actions";

import "../styles/login.scss";
import { LoginReducerType } from "../../../redux/login/login.redurcer.types";

export default function SignIn() {
  const { codigoError } = useSelector(
    (state: { LoginReducer: LoginReducerType }) => state.LoginReducer
  );

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [userErr, setUserErr] = useState("");
  const [pwdErr, setPwdErr] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) dispatch(loginAction({ user, password }));
  };

  const formValidation = () => {
    let isValid = true;

    if (user.trim().length === 0) {
      setUserErr("Este campo es requerido");
      isValid = false;
    }

    if (password.trim().length === 0) {
      setPwdErr("Este campo es requerido");
      isValid = false;
    }

    return isValid;
  };

  return (
    <div id="login_cont">
      <h1 id="login">Ingresa usuario y clave</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label className="label-form">USUARIO:</label>
          <input
            type="text"
            name="user"
            value={user}
            onChange={(e) => {
              setUser(e.target.value); setUserErr("");
            }}
            autoComplete="off"
          />
          {userErr !== "" && (
            <div style={{ color: "red", paddingTop: "10px" }}>
              Este campo es requerido
            </div>
          )}
        </div>
        <div className="form-group">
          <label className="label-form">CLAVE:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value); setPwdErr("");
            } }
            autoComplete="off"
          />
          {pwdErr !== "" && (
            <div style={{ color: "red", paddingTop: "10px" }}>
              Este campo es requerido
            </div>
          )}
        </div>
        {codigoError === 404 && (
          <div className="form-group">
            <p className="mensaje__error">Verifique su usuario y/o clave</p>
          </div>
        )}
        <div className="login_buttons">
          <button type="submit">ACEPTAR</button>
        </div>
      </form>
    </div>
  );
}
