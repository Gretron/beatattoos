import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const CustomForm = () => {
  let context = useOutletContext();

  useEffect(() => {
    context.setHeader("insert reference images");
    context.setNextStep("type/description");
    context.setPreviousStep("type/select");
  }, []);

  return <form className="custom-form"></form>;
};

export default CustomForm;
