import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';

import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './ContactForm.styled';

const ContactForm = () => {
  const notify = name =>
    toast(`Contact details of ${name} already in your phonebook!`);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handlerOnSubmit = event => {
    event.preventDefault();
    const form = event.target;

    if (contacts.find(el => el.name === form.name.value)) {
      notify(form.name.value);
      return;
    }
    dispatch(addContact({ name: form.name.value, number: form.number.value }));

    form.reset();
  };

  return (
    <>
      <ToastContainer />
      <StyledForm onSubmit={handlerOnSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>
        <StyledLabel>
          Phone
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
};

export { ContactForm };
