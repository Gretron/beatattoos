import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const DescriptionForm = () => {
  let context = useOutletContext();

  useEffect(() => {
    context.setHeader("write description*");
    context.setNextStep("placement");
    context.setPreviousStep("type/custom");
  }, []);

  return <form className="description-form"></form>;
};

export default DescriptionForm;
