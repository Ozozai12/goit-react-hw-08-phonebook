import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from 'pages/Contacts.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import { useEffect } from 'react';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

export function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = (name, number) => {
    const contact = {
      name,
      number,
    };
    if (
      contacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in your contact list`);
      return;
    }

    dispatch(addContact(contact));
  };

  const handleDelete = deleteContactId => {
    dispatch(deleteContact(deleteContactId));
  };

  const handleFilterChange = event => {
    dispatch(filterChange(event.target.value));
  };

  const loweredFilter = filter.toLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(loweredFilter);
  });

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>

      {contacts.length > 0 && (
        <Filter query={filter} onChange={handleFilterChange} />
      )}
      {isLoading && !error && <h3>Loading contacts...</h3>}
      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ContactList
          filterContacts={filterContacts}
          onDeleteContact={handleDelete}
        />
      )}
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      phone: PropTypes.number,
    })
  ),
};
