import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const NoteForm = () => {
  let context = useOutletContext();

  useEffect(() => {
    context.setHeader("write note (optional)");
    context.setNextStep("placement");
    context.setPreviousStep("type/flash");

    return () => {
      context.setPreviousStep("type/note");
    };
  }, []);

  return (
    <form className="note-form">
      <div className="note-form__field field">
        <div className="field__label">note</div>
        <input
          className="field__input"
          type="text"
          placeholder="your note goes here (max 256 characters)"
        ></input>
      </div>
    </form>
  );
};

export default NoteForm;
