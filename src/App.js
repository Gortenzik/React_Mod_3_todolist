import './App.css';
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className='container'>
      <div className='header'>
        <h1>Список дел</h1>
      </div>
      <div>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
