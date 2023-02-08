const FlashOption = ({ id, src, onChange }) => {
  return (
    <div className="flash-form__option">
      <input
        id={id}
        className="flash-form__option-input"
        type="radio"
        name="flash"
        value={id}
        onChange={() => onChange(id)}
      />
      <label className="flash-form__option-label" for={id} />
      <div className="flash-form__option-border"></div>
    </div>
  );
};

export default FlashOption;
