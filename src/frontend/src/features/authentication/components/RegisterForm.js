/**
 * Register Form of Login Page
 */
const RegisterForm = () => {
  return (
    <form className="register-form">
      <div className="field register-form__field">
        <div className="field__label">first name*</div>
        <input className="field__input" type="text" placeholder="john" />
      </div>
      <div className="field register-form__field">
        <div className="field__label">last name*</div>
        <input className="field__input" type="text" placeholder="doe" />
      </div>
      <div className="field register-form__field">
        <div className="field__label">phone number*</div>
        <input className="field__input" type="tel" placeholder="000-000-0000" />
      </div>
      <div className="field register-form__field">
        <div className="field__label">password*</div>
        <input
          className="field__input"
          type="password"
          placeholder="••••••••"
        />
      </div>
      <div className="field register-form__field">
        <div className="field__label">confirm password*</div>
        <input
          className="field__input"
          type="password"
          placeholder="••••••••"
        />
      </div>
      <button className="orange--button register-form__button">register</button>
    </form>
  );
};

export default RegisterForm;
