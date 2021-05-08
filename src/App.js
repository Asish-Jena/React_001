import './App.css';
import About from "./components/About";
import Home from "./components/Home";

function App() {
  var name="Asish Jena";
  return (
    <div className="App">
      My name is {name}
      <About></About>
      <Home name='Liku'></Home>
    </div>
  );
}

export default App;
