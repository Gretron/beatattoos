import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const PlacementForm = () => {
  let context = useOutletContext();

  useEffect(() => {
    context.setHeader("select placement of tattoo");
    context.setNextStep("location");
    // context.setPreviousStep("type/select");
  }, []);

  return <div className="placement-form"></div>;
};

export default PlacementForm;
