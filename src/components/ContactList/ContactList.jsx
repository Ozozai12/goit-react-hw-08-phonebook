import React from 'react';
import css from 'components/ContactList/ContactList.module.css';
import { BsFillTrashFill } from 'react-icons/bs';

export const ContactList = ({ filterContacts, onDeleteContact }) => {
  return (
    <div className={css.contactsContainer}>
      <ul className={css.contactList}>
        {filterContacts?.map(contact => {
          return (
            <li key={contact._id} className={css.contactItem}>
              <div className={css.nameThumb}>
                <span className={css.name}>{contact.name}:</span>{' '}
                <span>{contact.number}</span>
              </div>

              <div className={css.buttonThumb}>
                <button
                  type="button"
                  onClick={() => onDeleteContact(contact._id)}
                  className={css.deleteButton}
                >
                  {' '}
                  <BsFillTrashFill />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
