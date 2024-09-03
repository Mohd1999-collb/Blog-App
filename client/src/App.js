import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Toaster } from 'react-hot-toast';
// import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
