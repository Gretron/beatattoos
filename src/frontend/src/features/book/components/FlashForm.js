import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import FlashRadio from "./FlashRadio";

import flash from "../assets/img/flash.jpg";

const FlashForm = () => {
  let context = useOutletContext();

  useEffect(() => {
    context.setHeader("select available flash");
    context.setNextStep("");
    context.setPreviousStep("type/select");
  }, []);

  function handleChange(id) {
    context.setNextStep("type/note");
  }

  return (
    <form className="flash-form">
      <FlashRadio id={0} src={flash} onChange={handleChange} />
      <FlashRadio id={1} src={flash} onChange={handleChange} />
      <FlashRadio id={2} src={flash} onChange={handleChange} />
      <FlashRadio id={3} src={flash} onChange={handleChange} />
      <FlashRadio id={4} src={flash} onChange={handleChange} />
    </form>
  );
};

export default FlashForm;
