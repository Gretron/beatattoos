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
      <div className="flash-form__option-border"></div>
      <label className="flash-form__option-label" for={id} />
    </div>
  );
};

export default FlashOption;
