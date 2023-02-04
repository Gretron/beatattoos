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
      <div className="footer__wrapper">
        <div className="footer__container">
          <div className="footer__section">
            <div className="footer__brand">beatattoos</div>
          </div>
          <div className="footer__section">
            <Link to="/" className="footer__link">
              home
            </Link>
            <Link to="/portfolio" className="footer__link">
              portfolio
            </Link>
            <Link to="/about" className="footer__link">
              about
            </Link>
            <Link to="/account" className="footer__link">
              account
            </Link>
            <Link to="/book" className="footer__link">
              book now
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
    </div>
  );
};

export default Footer;
