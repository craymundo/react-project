import React, { Fragment } from "react";
import "./scss/layout-home-header.scss";
import iconHora from "../../../../assets/image/hora.png";
import iconUser from "../../../../assets/image/icon_user.png";
import iconHome from "../../../../assets/image/icon_home.png";
import { LoginReducerType } from "../../../../redux/login/login.redurcer.types";
import { useSelector, useDispatch } from "react-redux";
import { loginResetConfigAction } from "../../../../redux/login/actions";
import AuthStorage from "../../../../libs/auth-storage";
import Timer from "../../../../components/reloj";

export default React.memo(function LayoutHomeHeader() {
  const { user } = useSelector(
    (state: { LoginReducer: LoginReducerType }) => state.LoginReducer
  );

  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    e.preventDefault();
    const user = {
      user: "",
      name: "",
      lastName: "",
    };
    AuthStorage.setUser(user);
    dispatch(loginResetConfigAction());
  };

  return (
    <Fragment>
      <section className="header header--inerit">
        <div className="header--main">
          <div className="heading-box">
            <div className="heading">
              <p>Dashboard</p>
            </div>
          </div>
          <div className="hours">
            <div className="home">
              <a href="/#" >
                <img src={iconHora} alt="" />
               <Timer />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="div-flecha">
        <div className="triangle-down-v2"></div>
      </section>
      {user && (
        <section className="user">
          <div className="user--main user--mainv2">
            <div className="welcome">
              <img src={iconUser} alt="" />
              <p>
                <span>User </span> {user.name} {user.last_name}
              </p>
            </div>

            <div className="close">
              <a href="/#"  onClick={(e) => handleClick(e)}>
                <img src={iconHome} alt="" />
                <p>Cerrar</p>
              </a>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
});
