import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import logo from './assets/images/logo.svg';
import './assets/scss/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './nav/Nav';
import Home from './home/Home';
import Todos from './todoApp/Todos';
import Form from './form/Form';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/Form" element={<Form />} />
        </Routes>

      </header>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
