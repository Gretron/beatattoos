import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const NoteForm = () => {
  let context = useOutletContext();

  useEffect(() => {
    context.setHeader("write note (optional)");
    context.setNextStep("placement");
    context.setPreviousStep("type/flash");
  }, []);

  return <form className="note-form"></form>;
};

export default NoteForm;
