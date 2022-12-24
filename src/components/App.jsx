import { Feedback } from "./FeedbackForm/FeedbackForm";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        fontSize: 40,
        color: '#010101'
      }}
    >
            <Feedback />
    </div>
  );
};
