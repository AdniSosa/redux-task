import { addTask, deleteTask } from "./redux/todosSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  let inputValue;
  const task = useSelector(state => state.todos)

  const handleInput = (e) => {
    inputValue = e.target.value;
    //console.log(inputValue)
  }

  const dispatch = useDispatch();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(task)

    if(inputValue) dispatch(addTask(inputValue))
  }

  const handleClick = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Añade una tarea" 
          value={inputValue}
          onChange={handleInput}
        />
        <button type="submit">Agregar</button>
      </form>
      
      <div className="list">
        <ul>
          {task.map(task => (
            <li key={task.id}>
              <p>{task.text}</p>
              <button onClick={() => handleClick(task.id)}>Eliminar</button>
            </li>))
          }
       </ul>
        
      </div>
      
    </>
  );
};

export default App;
