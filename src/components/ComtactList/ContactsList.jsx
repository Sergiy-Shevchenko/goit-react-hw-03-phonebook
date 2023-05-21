import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as AddIcon } from '../Icons/phone.svg';

export const ContactsList = ({ contacts, deleteUserProps }) => {
  return (
    <div className={css.section}>
      <ul className={css.contacList}>
        {contacts.map(({ name, number, id }) => (
          <li className={css.contactItem} key={id}>
            <p className={css.contacName}>
              <AddIcon />
              {name}: {number}
            </p>
            <button type="button" onClick={() => deleteUserProps(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  deleteUserProps: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
