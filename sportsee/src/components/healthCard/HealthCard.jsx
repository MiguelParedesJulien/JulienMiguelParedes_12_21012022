// import React, { useState, useEffect } from "react";
import calories from "../../assets/img/calories.svg";
import glucides from "../../assets/img/glucides.svg";
import prot from "../../assets/img/prot.svg";
import lipides from "../../assets/img/lipides.svg";
import "./healthCard.css";

/**
 * React Component dsiplaying the ritgh side bar with info of health
 * @param {*} props
 * @returns {ReactElement}
 */

 function HealthCard(props) {
    const healthCardFabrique = () => {
        if (props.calorie) {
          function makeFloatNumber(nbr) {
            return Number.parseFloat(nbr).toFixed(3);
          }
          let calorieNumber = makeFloatNumber(props.calorie.calorieCount / 1000);
          return (
            <div className="nutri-Card">
              <img src={calories} alt="calorie" />
              <div>
                <h3>{calorieNumber}kcal</h3>
                <p>Calories</p>
              </div>
            </div>
          );
        }
        if (props.prot) {
          return (
            <div className="nutri-Card">
              <img src={prot} alt="protéine" />
              <div>
                <h3>{props.prot.proteinCount}g</h3>
                <p>Protéines</p>
              </div>
            </div>
          );
        }
        if (props.glucide) {
          return (
            <div className="nutri-Card">
              <img src={glucides} alt="glucide" />
              <div>
                <h3>{props.glucide.carbohydrateCount}g</h3>
                <p>Glucides</p>
              </div>
            </div>
          );
        }
        if (props.lipide) {
          return (
            <div className="nutri-Card">
              <img src={lipides} alt="lipide" />
              <div>
                <h3>{props.lipide.lipidCount}g</h3>
                <p>Lipides</p>
              </div>
            </div>
          );
        }
      };
    
      return <div>{healthCardFabrique()}</div>;
    }
    
    export default HealthCard;