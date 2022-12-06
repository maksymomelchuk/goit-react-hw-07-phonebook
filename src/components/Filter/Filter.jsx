import { useDispatch } from 'react-redux';
import { StyledLabel, StyledInput } from './Filter.styled';
import { updateFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.target.value));
  };
  return (
    <StyledLabel>
      <p>Find contacts by name</p>
      <StyledInput onChange={handleChange} type="text"></StyledInput>
    </StyledLabel>
  );
}
