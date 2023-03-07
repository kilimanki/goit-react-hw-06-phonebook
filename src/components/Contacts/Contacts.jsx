import { useDispatch, useSelector } from 'react-redux';
import Form from './Form/Form';
import { List } from './List/List';

import { Input } from './Input/Input';
import { addContact } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selector';

import css from './Contacts.module.css';
const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

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

  return (
    <>
      <Form onSubmit={addContacts} />
      <h2 className={css.title}>Contacts</h2>
      <div className={css.block}>
        <Input />
        <List />
      </div>
    </>
  );
};
export default Contacts;
