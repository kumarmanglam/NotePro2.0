import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import RouterContainer from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
