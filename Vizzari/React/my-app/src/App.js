import logo from './logo.svg';
import ButtonLabelCounter from "./components/ButtonLabelCounter/ButtonLabelCounter";
import ButtonList from "./components/ButtonList/ButtonList";
import CheckList from "./components/CheckList/CheckList";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ButtonLabelCounter name="Cliccami"/>
          <ButtonList name="Add Item"></ButtonList>
          <ul><CheckList></CheckList></ul>




      </header>
    </div>
  );
}

export default App;
