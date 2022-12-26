import css from './FeedbackOptions.module.css';
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
