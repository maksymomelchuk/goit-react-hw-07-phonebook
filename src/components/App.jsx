import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/selectors';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import { ContactForm } from './Phonebook/ContactForm';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && (
        <div>
          <h2 style={{ textAlign: 'center' }}>Contacts</h2>
          <Filter value={filter} />
          <ContactsList />
        </div>
      )}
    </div>
  );
};
