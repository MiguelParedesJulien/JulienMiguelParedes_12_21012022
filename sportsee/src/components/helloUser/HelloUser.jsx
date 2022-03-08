import React from "react";
import PropTypes from "prop-types";
import "./helloUser.css";

/**
 * React Component displaying the right side bar with info of health
 * @param {string} props
 * @returns {ReactElement}
 */
function HelloUser({ prenom }) {
  console.log(prenom);
  return (
    <section>
      <h2 className="hello-titre">
        Bonjour <span className="firstname">{prenom}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

HelloUser.propTypes = {
  prenom: PropTypes.string,
};

export default HelloUser;
