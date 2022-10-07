import './App.css';
import Todo from './todo';
import  Timer from './timer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Creamos un To Do list - timer</h1>
        <Todo/>
        <Timer/>
      </header>
    </div>
  );
}

export default App;
