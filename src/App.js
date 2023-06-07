import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import RouterContainer from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <RouterContainer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
