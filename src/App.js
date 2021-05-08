import './App.css';
import About from "./components/About";

function App() {
  var name="Asish Jena";
  return (
    <div className="App">
      <header className="App-header">
       My name is {name}
      </header>
      <About></About>
    </div>
  );
}

export default App;
