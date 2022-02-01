import React from "react";
import Header from "../../components/header/Header";
import "./error.css";

function Error() {
  return (
    <>
      <Header />
      <div className="erreur">
        <h2 className="erreur-title">Erreur 404</h2>
        <p className="erreur-para">La page demandée n'existe pas</p>
      </div>
    </>
  );
}

export default Error;
