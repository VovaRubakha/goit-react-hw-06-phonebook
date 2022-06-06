export const getContacts = state => state.contacts.items;

export const deleteContact = state =>
  state.contacts.items.filter(contact => contact.id);

// export const setFilter = state => state.contacts;
