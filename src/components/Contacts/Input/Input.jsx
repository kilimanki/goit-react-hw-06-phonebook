import { setFilter } from 'redux/filter/filter-slice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
export const Input = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  const filter = useSelector(getFilter);
  return (
    <input type="text" value={filter} name="filter" onChange={handleChange} />
  );
};
