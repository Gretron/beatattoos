// #region Imports

// Styles and Components
import { Link } from "react-router-dom";
import { registerStyles, RegisterForm } from "../features/authentication/index";
import Seperator from "../components/Seperator";

// #endregion

/**
 * Register Page
 */
const Login = () => {
  return (
    <div className="register">
      <div className="register__title d3">register</div>
      <RegisterForm />
      <div className="register__switch">
        already have an account?
        <Link className="login__link" to="/login">
          log into account
        </Link>
      </div>
    </div>
  );
};

export default Login;
