import React from "react";
import yoga from "../../assets/img/yoga.svg";
import natation from "../../assets/img/natation.svg";
import velo from "../../assets/img/velo.svg";
import haltere from "../../assets/img/haltere.svg";
import "./leftSide.css";

/**
 * React Component displaying the left side bar
 * @returns {ReactElement}
 */

function LeftSide() {
   return (
      <aside>
         <ul className="aside-ul">
            <li className="icone-bar">
               <img src={yoga} alt="yoga" />
            </li>
            <li className="icone-bar">
               <img src={natation} alt="natation" />
            </li>
            <li className="icone-bar">
               <img src={velo} alt="velo" />
            </li>
            <li className="icone-bar">
               <img src={haltere} alt="haltere" />
            </li>
         </ul>
         <div>
            <span className="copyright">Copyright, SportSee 2020</span>
         </div>
      </aside>
   );
}

export default LeftSide;
