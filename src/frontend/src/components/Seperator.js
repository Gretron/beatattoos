/**
 * SVG Hamburger Icon
 */
const HamburgerIcon = () => {
  return (
    <div className="seperator">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 16C23.1635 16 16 23.1635 16 32C16 23.1635 8.83648 16 0 16C8.83648 16 16 8.83648 16 0C16 8.83648 23.1635 16 32 16Z" />
      </svg>
      <div className="line"></div>
    </div>
  );
};

export default HamburgerIcon;
