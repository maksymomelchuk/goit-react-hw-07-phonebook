import { useSelector } from 'react-redux';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import { ContactForm } from './Phonebook/ContactForm';
import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
