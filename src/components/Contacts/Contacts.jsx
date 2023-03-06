import { useDispatch, useSelector } from 'react-redux';
import Form from './Form/Form';
import { List } from './List/List';

import { Input } from './Input/Input';
import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selectors';

import css from './Contacts.module.css';
const Contacts = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const addContacts = ({ name, number }) => {
    if (alreadyAdded({ name })) {
      alert(`${name} is already added`);
      return;
    }
    dispatch(addContact({ name, number }));
  };
  const alreadyAdded = ({ name }) => {
    const dublicate = contacts.find(item => {
      return item.name.toLowerCase() === name.toLowerCase();
    });
    return dublicate;
  };
  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const result = contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
    return result;
  };

  const items = filteredContacts();
  return (
    <>
      <Form onSubmit={addContacts} />
      <h2 className={css.title}>Contacts</h2>
      <div className={css.block}>
        <Input handleChange={handleChange} filter={filter} />
        <List items={items} onclick={deleteContacts} />
      </div>
    </>
  );
};
export default Contacts;
