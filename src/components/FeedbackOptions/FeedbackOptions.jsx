import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button type="button" className={css.button} onClick={onLeaveFeedback}>
      good
    </button>
    <button type="button" className={css.button} onClick={onLeaveFeedback}>
      neutral
    </button>
    <button type="button" className={css.button} onClick={onLeaveFeedback}>
      bad
    </button>
  </div>
);

FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
