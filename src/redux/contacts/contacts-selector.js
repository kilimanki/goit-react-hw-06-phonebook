export const getContacts = store => store.contacts;
export const getfilteredContacts = store => {
  const { filter, contacts } = store;
  if (!filter) {
    return contacts;
  }

  const result = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });
  return result;
};
