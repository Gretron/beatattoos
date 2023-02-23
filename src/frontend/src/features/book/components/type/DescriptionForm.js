// #region Imports

// Hooks
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// Tattoo Types
import { TattooType } from "../../data/constants";

// #endregion

const DescriptionForm = () => {
  let context = useOutletContext();

  useEffect(() => {
    context.setHeader("write description*");
    context.setNextStep("placement");
    context.setPreviousStep("type/custom");

    return () => {
      // Set Cookie for Tattoo Type on Exit
      localStorage.setItem("tattooType", TattooType.Custom);
    };
  }, []);

  return (
    <form className="description-form">
      <div className="description-form__field field">
        <div className="field__label">description</div>
        <textarea
          className="field__input"
          placeholder="your description goes here"
        ></textarea>
      </div>
    </form>
  );
};

export default DescriptionForm;
