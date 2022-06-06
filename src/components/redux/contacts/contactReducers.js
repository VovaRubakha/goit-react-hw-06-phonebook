import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './contactsTypes';

const contactsReducer = (
  state = {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  { type, payload }
) => {
  switch (type) {
    case ADD_CONTACT:
      const newContacts = [...state.items, payload];
      return { ...state, items: newContacts };
    case DELETE_CONTACT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      };
    case SET_FILTER:
      return payload;
    default:
      return state;
  }
};

export default contactsReducer;
