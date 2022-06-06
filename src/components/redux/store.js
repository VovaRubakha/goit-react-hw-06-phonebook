import { createStore, combineReducers } from 'redux';
import contactsReducer from './contacts/contactReducers';

const rootReducers = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
