import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Contacts from './Contacts/Contacts';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Contacts />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
