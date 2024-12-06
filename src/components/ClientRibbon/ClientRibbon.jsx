import React from "react";
import "./client-ribbon.scss";
import logoGoogle from "../../assets/images/logo-google.png";
import logoIBM from "../../assets/images/logo-ibm.png";
import logoHP from "../../assets/images/logo-hp.png";
import logoMicrosoft from "../../assets/images/logo-microsoft.png";
import logoVG from "../../assets/images/logo-vector-graphics.png";

const ClientRibbon = () => {
  return (
    <section className="section client-ribbon">
      {/* goofle, ibm, microsoft,hp, vectgr */}
      <img src={logoGoogle} alt="Google" className="client__logo" />{" "}
      <img src={logoIBM} alt="IBM" className="client__logo" />{" "}
      <img src={logoMicrosoft} alt="Microsoft" className="client__logo" />
      <img src={logoHP} alt="Hewlett Packerd" className="client__logo" />{" "}
      <img src={logoVG} alt="Vector Graphics" className="client__logo" />
    </section>
  );
};

export default ClientRibbon;
