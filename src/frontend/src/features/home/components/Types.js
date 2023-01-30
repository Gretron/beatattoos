// #region Imports

// Components
import Seperator from "../../../components/Seperator";

// Images
import { ReactComponent as Flashes } from "../assets/img/flashes.svg";
import { ReactComponent as Customs } from "../assets/img/customs.svg";

// #endregion

/**
 * Types Component of Home Page
 */
const Types = () => {
  return (
    <div className="types">
      <div className="types__container">
        <div className="types__card">
          <div className="types__card__title d3">flashes</div>
          <p className="types__card__subtitle">
            select from a collection of pre-constructed tattoo designs.
          </p>
          <Flashes />
        </div>
        <Seperator />
        <div className="types__card">
          <div className="types__card__title d3">customs</div>
          <p className="types__card__subtitle">
            looking for a design that is more <strong>you</strong>? let’s create
            something together.
          </p>
          <Customs />
        </div>
      </div>
      <button className="outline--button">book now</button>
    </div>
  );
};

export default Types;
