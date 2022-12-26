import { Feedback } from './Feedback/Feedback';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginLeft: '60px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback />
      <Phonebook />
    </div>
  );
};
