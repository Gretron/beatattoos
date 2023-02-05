/**
 * Login Form of Login Page
 */
const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="field register-form__field">
        <div className="field__label">phone number</div>
        <input className="field__input" type="tel" placeholder="000-000-0000" />
      </div>
      <div className="field login-form__field">
        <div className="field__label">password</div>
        <input
          className="field__input"
          type="password"
          placeholder="••••••••"
        />
      </div>
      <button className="orange--button login-form__button">login</button>
    </form>
  );
};

export default LoginForm;
