import React from 'react';
import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ filterContacts, onDeleteContact }) => {
  return (
    <div className={css.contactsContainer}>
      <ul className={css.contactList}>
        {filterContacts?.map(contact => {
          return (
            <li key={contact.id} className={css.contactItem}>
              <div className={css.nameThumb}>
                <span className={css.name}>{contact.name}:</span>{' '}
                <span>{contact.number}</span>
              </div>

              <div className={css.buttonThumb}>
                <button
                  type="button"
                  onClick={() => onDeleteContact(contact.id)}
                  className={css.deleteButton}
                >
                  {' '}
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
