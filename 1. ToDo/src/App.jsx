import { useEffect, useState } from 'react'; // Importing necessary modules from React
import Input from './components/Input'; // Importing the Input component
import Tasks from './components/Tasks'; // Importing the Tasks component

function App() {
  // State to store the list of todos
  const [todos, setTodos] = useState([]);
  // State to store the todo being edited
  const [EditTodo, setEditTodo] = useState("");

  // useEffect to load todos from localStorage when the component mounts
  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if(todoString){
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, [])

  // useEffect to save todos to localStorage whenever the todos state changes
  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos(prev => {
      return [...prev, {
        todo,
        isCompleted: false
      }];
    })
  }

  // Function to toggle the completion status of a todo
  const handleCompleted = (index) => {
    setTodos(values => {
      const temp = [...values];
      temp[index] = { ...temp[index], isCompleted: !temp[index].isCompleted };
      return temp;
    });
  };

  // Function to delete a todo
  const handleDelete = (index) => {
    setTodos(values => {
      return values.filter((val, i) => {
        return i !== index;
      })
    })
  }

  // Function to edit a todo
  const handleEdit = (index) => {
    let todo = todos[index].todo;
    handleDelete(index);
    setEditTodo(todo);
  }

  return (
    <>
      <div className="todos">
        <h1>ToDo App</h1>
        <div className="container">
          {/* Passing the addTodo and editTodo states to the Input component */}
          <Input addTodo={addTodo} editToDo={EditTodo}/>
          <hr />
          {/* Display a message if there are no tasks */}
          {todos.length === 0 && <div style={{marginTop: '20px'}}>No Tasks to show</div>}
          {/* Rendering the list of tasks */}
          {todos.map((todo, index) => {
            return (
              <Tasks
                key={index}
                index={index}
                todo={todo.todo}
                isCompleted={todo.isCompleted}
                handleCompleted={handleCompleted}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App;
