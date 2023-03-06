import { useDispatch, useSelector } from 'react-redux';
import Form from './Form/Form';
import { List } from './List/List';

import { Input } from './Input/Input';
import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import css from './Contacts.module.css';
const Contacts = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

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
    console.log(id);
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
// class Contacts extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }
//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts?.length) {
//       this.setState({ contacts: contacts });
//     }
//   }
// handleChange = e => {
//   const { name, value } = e.target;
//   this.setState({
//     [name]: value,
//   });
// };

// addContacts = ({ name, number }) => {
//   if (this.alreadyAdded({ name })) {
//     alert(`${name} is already added`);
//     return;
//   }
//   this.setState(prevState => {
//     const { contacts } = prevState;
//     const newContact = {
//       name,
//       number,
//       id: nanoid(),
//     };
//     return { contacts: [...contacts, newContact] };
//   });
// };
// alreadyAdded = ({ name }) => {
//   const { contacts } = this.state;

//   const dublicate = contacts.find(item => {
//     return item.name.toLowerCase() === name.toLowerCase();
//   });
//   return dublicate;
// };

// deleteContacts = id => {
//   this.setState(prevState => {
//     const newItems = prevState.contacts.filter(item => item.id !== id);
//     return {
//       contacts: newItems,
//     };
//   });
// };

// filteredContacts() {
//   const { filter, contacts } = this.state;
//   if (!filter) {
//     return contacts;
//   }

//   const result = contacts.filter(item => {
//     return item.name.toLowerCase().includes(filter.toLowerCase());
//   });
//   return result;
// }
//   render() {
// const items = this.filteredContacts();
// const { filter } = this.state;
// return (
//   <>
//     <Form onSubmit={this.addContacts} />
//     <h2 className={css.title}>Contacts</h2>
//     <div className={css.block}>
//       <Input handleChange={this.handleChange} filter={filter} />
//       <List items={items} onclick={this.deleteContacts} />
//     </div>
//   </>
// );
//   }
// }
export default Contacts;
