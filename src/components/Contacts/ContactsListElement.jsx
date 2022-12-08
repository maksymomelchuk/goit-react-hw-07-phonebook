import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { StyledContactsElement, StyledDeleteButton } from './Contacts.styled';

export default function ContactsListElement({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <StyledContactsElement>
      <span>
        {name}: {number}
      </span>
      <StyledDeleteButton
        onClick={() => dispatch(deleteContact(id))}
        type="button"
        id={id}
      >
        Delete
      </StyledDeleteButton>
    </StyledContactsElement>
  );
}

ContactsListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
