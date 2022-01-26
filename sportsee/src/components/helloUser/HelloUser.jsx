import React from "react";
import "./helloUser.css";

/**
 * React Component dsiplaying the ritgh side bar with info of health
 * @param {*} props
 * @returns {ReactElement}
 */

 function HelloUser(props) {
    return (
        <section>
          <h2 className="hello-titre">
            Bonjour <span className="firstname">{props.prenom}</span>
          </h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
      );
    }
    
    export default HelloUser;