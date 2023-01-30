// #region Imports

// Hooks
import { useLocation, Link } from "react-router-dom";

// Components
import { ReactComponent as Curve } from "../assets/img/curve.svg";
import { ReactComponent as Instagram } from "../assets/img/instagram.svg";
import { ReactComponent as Facebook } from "../assets/img/facebook.svg";

// #endregion

/**
 * Navigation Footer
 */
const Footer = () => {
  const location = useLocation();

  return (
    <div className="footer">
      <div className="footer__curve">
        <Curve />
      </div>
      <div className="footer__container">
        <div className="footer__section">
          <div className="footer__brand">beatattoos</div>
        </div>
        <div className="footer__section">
          <Link to="/">
            <a
              className={
                location.pathname == "/"
                  ? "active--link footer__link"
                  : "footer__link"
              }
            >
              home
            </a>
          </Link>
          <Link to="/portfolio">
            <a
              className={
                location.pathname == "/portfolio"
                  ? "active--link footer__link"
                  : "footer__link"
              }
            >
              portfolio
            </a>
          </Link>
          <Link to="/about">
            <a
              className={
                location.pathname == "/about"
                  ? "active--link footer__link"
                  : "footer__link"
              }
            >
              about
            </a>
          </Link>
          <Link to="/account">
            <a
              className={
                location.pathname == "/account"
                  ? "active--link footer__link"
                  : "footer__link"
              }
            >
              account
            </a>
          </Link>
          <Link to="/book">
            <a
              className={
                location.pathname == "/book"
                  ? "active--link footer__link"
                  : "footer__link"
              }
            >
              book now
            </a>
          </Link>
        </div>
        <div className="footer__section">
          <div className="footer__header">social media</div>
          <div className="footer__icons">
            <a href="https://www.instagram.com/beatattoos/">
              <button className="footer__icon icon--button">
                <Instagram />
              </button>
            </a>
            <a href="https://www.facebook.com/Beatattoos-167139110716578/?paipv=0&eav=AfZ3CEKI-DybCZAplA0MgfK2hgXwR3t6nMBo9PY-WqrY4gLWQeg_oGngRjGzY3zWCT0">
              <button className="footer__icon icon--button">
                <Facebook />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__information">
        <span>© BEATATTOOS | 2023</span>
        <span>DESIGN & DEV: DAVID ANO-TRUDEAU</span>
      </div>
    </div>
  );
};

export default Footer;
