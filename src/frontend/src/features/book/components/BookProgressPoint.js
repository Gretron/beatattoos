/**
 * Point on Book Progress Bar
 */
const BookProgressPoint = ({ name, active }) => {
  return (
    <div
      className={`book-progress__point ${
        active ? "book-progress__point--active" : ""
      }`}
    >
      <div className="book-progress__point-text h6">{name}</div>
      <div className="book-progress__point-icon"></div>
    </div>
  );
};

export default BookProgressPoint;
