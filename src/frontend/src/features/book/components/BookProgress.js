/**
 * Book Progress Bar of Book Page
 */
const BookProgress = () => {
  return (
    <div className="book-progress">
      <div className="book-progress__point">
        <div className="book-progress__point-text">type</div>
        <div className="book-progress__point-icon"></div>
      </div>
      <div className="book-progress__point">
        <div className="book-progress__point-text">placement</div>
        <div className="book-progress__point-icon"></div>
      </div>
      <div className="book-progress__point">
        <div className="book-progress__point-text">location</div>
        <div className="book-progress__point-icon"></div>
      </div>
      <div className="book-progress__point">
        <div className="book-progress__point-text">datetime</div>
        <div className="book-progress__point-icon"></div>
      </div>
      <div className="book-progress__point">
        <div className="book-progress__point-text">confirm</div>
        <div className="book-progress__point-icon"></div>
      </div>
    </div>
  );
};

export default BookProgress;
