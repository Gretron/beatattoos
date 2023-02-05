// #region Imports

// Styles and Components
import { Link } from "react-router-dom";
import { loginStyles, LoginForm } from "../features/authentication/index";
import Seperator from "../components/Seperator";

// #endregion

/**
 * Login Page
 */
const Login = () => {
  return (
    <div className="login">
      <div className="login__title d3">login</div>
      <LoginForm />
      <div className="login__switch">
        don't have an account?
        <Link className="register__link" to="/register">
          create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
