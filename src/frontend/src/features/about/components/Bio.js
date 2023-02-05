// #region Imports

import Seperator from "../../../components/Seperator";
import { ReactComponent as Instagram } from "../../../assets/img/instagram.svg";
import { ReactComponent as Facebook } from "../../../assets/img/facebook.svg";

// #endregion

/**
 * Bio of About Page
 */
const Bio = () => {
  return (
    <div className="bio">
      <div className="bio__image-container">
        <div className="bio__image"></div>
      </div>
      <div className="bio__content">
        <div className="bio__title d3">beatattoos</div>
        <Seperator />
        <div className="bio__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          pretium libero. In tincidunt eget felis non ornare. Donec mattis diam
          id odio facilisis, eget pretium ex semper. Proin lobortis vestibulum
          risus vel cursus. Aenean quis consectetur quam, a bibendum mauris.
          Phasellus vitae tristique orci. Praesent dignissim a ante eu
          convallis. Duis id arcu sem. Sed quis magna fermentum est ornare
          placerat. Pellentesque elementum mauris eu gravida lobortis.
          Pellentesque ut dapibus leo. Donec dapibus, purus ultricies pretium
          bibendum, lacus augue finibus enim, eu pellentesque lacus libero eu
          ligula. Nulla tristique nisl et aliquam finibus. Integer interdum,
          velit et maximus porta, tellus elit fringilla leo, consequat gravida
          urna tortor vel urna. Fusce ac gravida massa, vel molestie erat.
          Suspendisse convallis lacus turpis, sed molestie enim pellentesque
          nec.
        </div>
        <div className="bio__icons">
          <a href="https://www.instagram.com/beatattoos/">
            <button className="bio__icon icon--button">
              <Instagram />
            </button>
          </a>
          <a href="https://www.facebook.com/Beatattoos-167139110716578/?paipv=0&eav=AfZ3CEKI-DybCZAplA0MgfK2hgXwR3t6nMBo9PY-WqrY4gLWQeg_oGngRjGzY3zWCT0">
            <button className="bio__icon icon--button">
              <Facebook />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
