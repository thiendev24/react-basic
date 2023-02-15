import logo from './assets/images/logo.svg';
import './assets/scss/App.scss';
import Form from './form/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Form />
      </header>
    </div>
  );
}

export default App;
