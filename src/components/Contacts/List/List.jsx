import { getContacts } from 'redux/contacts/contacts-selector';
import { deleteContact } from 'redux/contacts/contacts-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { useSelector, useDispatch } from 'react-redux';

export const List = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const result = contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
    return result;
  };
  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };
  const items = filteredContacts();
  const elements = items.map(item => {
    return (
      <li key={item.id}>
        <span>{item.name}:</span>
        <span>{item.number}</span>
        <button onClick={() => deleteContacts(item.id)}>Delete</button>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};
