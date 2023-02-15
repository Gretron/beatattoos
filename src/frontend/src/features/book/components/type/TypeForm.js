import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import styles from "../../assets/css/type.css";

const TypeForm = () => {
  let context = useOutletContext();

  useEffect(() => {
    context.setHeader("select type of tattoo");
    context.setPreviousStep("");
    context.setNextStep("");
  }, []);

  const [type, setType] = useState("");

  // Types of Tattoos Enum
  const types = {
    flash: "flash",
    custom: "custom",
  };

  function selectType(type) {
    if (type === types.flash) {
      setType(types.flash);
      context.setNextStep("type/flash");
    } else {
      setType(types.custom);
      context.setNextStep("type/custom");
    }
  }

  return (
    <div className="select-type">
      <button
        className="select-type__button"
        onClick={() => selectType(types.flash)}
        disabled={type === types.flash}
      >
        <div className="select-type__button-title d3">flash</div>
        <div className="select-type__button-subtitle body">
          select from a collection of pre-constructed tattoo designs.
        </div>
      </button>
      <button
        className={`select-type__button ${
          type === types.custom ? "select-type__button--active" : ""
        }`}
        onClick={() => selectType(types.custom)}
        disabled={type === types.custom}
      >
        <div className="select-type__button-title d3">custom</div>
        <div className="select-type__button-subtitle body">
          make a request for a custom tattoo with reference images and a
          description.
        </div>
      </button>
    </div>
  );
};

export default TypeForm;
