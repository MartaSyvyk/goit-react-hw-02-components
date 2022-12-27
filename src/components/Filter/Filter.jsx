export const Filter = ({ filter, handleChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </label>
  );
};
