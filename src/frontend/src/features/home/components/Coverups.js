// Reveal
import Slider from "../../../components/Slider";
import { ReactComponent as Reveal } from "../assets/img/reveal.svg";

/**
 * Coverups Component of Home Page
 */
const Coverups = () => {
  const revealCallback = (value) => {
    document.querySelector("#reveal__rect").setAttribute("width", `${value}%`);
  };

  return (
    <div className="coverups">
      <div className="coverups__container">
        <div className="coverups__title d2">cover-ups</div>
        <p className="coverups__subtitle">
          looking to cover up a tattoo? you’ve come to the right place. turn a
          poor decision into a work of art.
        </p>
        <Reveal />
        <Slider
          min={0}
          max={100}
          labelOne={"original"}
          labelTwo={"covered"}
          callback={revealCallback}
        />
      </div>
    </div>
  );
};

export default Coverups;
