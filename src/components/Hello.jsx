import React, { Fragment } from "react";
import Logo from "../assets/img/react.png";
import Loader from "../assets/img/loader.gif";
import LoaderSvg from "../assets/svg/Loader.svg";

const Hello = () => (
  <Fragment>
    <img src={Logo} style={{ height: 50, width: 50 }}></img>
    <h5>Hello from React! KLLP</h5>
    <h5>Hello from React! KLLP</h5>
    <img src={Loader} style={{ height: 50, width: 50 }}></img>
    <img src={LoaderSvg} style={{ height: 50, width: 50 }}></img>

  </Fragment>
);

export default Hello;
