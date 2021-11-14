import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BottoneMagico from './components/BottoneMagico/BottoneMagico';
import BottoneLista from './components/BottoneLista/BottoneLista';
import ToDoList from './components/ToDoList/ToDoList';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BottoneMagico name="Ciao " myColor="red" initCount="0"/>
        <BottoneMagico name="Notte " myColor="green" initCount="3"/>
        <p>
          Edit <code>src/App.js</code> and save to reload by Nada Cenci
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BottoneLista/>
        <hr/>
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;
