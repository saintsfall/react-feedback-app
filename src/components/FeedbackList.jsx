import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length == 0) {
    return <p>No feedbacks yet...</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem item={item} key={item.id} />;
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string,
    })
  ),
};

export default FeedbackList;
