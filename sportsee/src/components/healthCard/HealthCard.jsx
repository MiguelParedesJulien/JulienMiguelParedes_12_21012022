import React from "react";
import calories from "../../assets/img/calories.svg";
import glucides from "../../assets/img/glucides.svg";
import proteine from "../../assets/img/proteine.svg";
import lipides from "../../assets/img/lipides.svg";
import PropTypes from "prop-types";
import "./healthCard.css";

/**
 * React Component dsiplaying the ritgh side bar with info of health
 * @param {*} props
 * @returns {ReactElement}
 */

function HealthCard({ calorie, prot, glucide, lipide }) {
  const healthCardFabrique = () => {
    if (calorie) {
      function makeFloatNumber(nbr) {
        return Number.parseFloat(nbr).toFixed(3);
      }
      let calorieNumber = makeFloatNumber(calorie.calorieCount / 1000);
      return (
        <div className="nutri-card">
          <div className="calorie">
            <img src={calories} alt="calorie" />
          </div>
          <div>
            <h3>{calorieNumber}kcal</h3>
            <p>Calories</p>
          </div>
        </div>
      );
    }
    if (prot) {
      return (
        <div className="nutri-card">
          <div className="proteine">
            <img src={proteine} alt="protéine" />
          </div>
          <div>
            <h3>{prot.proteinCount}g</h3>
            <p>Protéines</p>
          </div>
        </div>
      );
    }
    if (glucide) {
      return (
        <div className="nutri-card">
          <div className="glucide">
            <img src={glucides} alt="glucide" />
          </div>
          <div>
            <h3>{glucide.carbohydrateCount}g</h3>
            <p>Glucides</p>
          </div>
        </div>
      );
    }
    if (lipide) {
      return (
        <div className="nutri-card">
          <div className="lipide">
            <img src={lipides} alt="lipide" />
          </div>
          <div>
            <h3>{lipide.lipidCount}g</h3>
            <p>Lipides</p>
          </div>
        </div>
      );
    }
  };

  return <div className="santeCard">{healthCardFabrique()}</div>;
}

HealthCard.propTypes = {
  calorie: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }),
};

export default HealthCard;
