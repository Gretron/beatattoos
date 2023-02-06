import BookProgressPoint from "./BookProgressPoint";

/**
 * Book Progress Bar of Book Page
 */
const BookProgress = () => {
  return (
    <div className="book-progress">
      <BookProgressPoint name="type" />
      <BookProgressPoint name="placement" />
      <BookProgressPoint name="location" />
      <BookProgressPoint name="datetime" />
      <BookProgressPoint name="confirm" />
    </div>
  );
};

export default BookProgress;
