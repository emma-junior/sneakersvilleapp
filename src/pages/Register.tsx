import React from "react";
import Reg from "../components/RegForm";
import RegLoginImg from "../components/RegLoginImg";
import "../Styles/Reg/reg.scss";

const Register = () => {
  return (
    <div className="reg-page">
      <div className="reg">
        <RegLoginImg pic="regimg" />
        <Reg />
      </div>
    </div>
  );
};

export default Register;
