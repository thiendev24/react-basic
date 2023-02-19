import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './assets/scss/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './nav/Nav';
import Home from './home/Home';
import Todos from './todoApp/Todos';
import Form from './form/Form';
import ListUsers from './listUsers/ListUsers';
import DetailsUser from './listUsers/DetailsUser';
import NotFound from './listUsers/NotFound'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/form" element={<Form />} />
          <Route path='/list-users' element={<ListUsers />} />
          <Route path='/list-users/:id' element={<DetailsUser />} />
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
