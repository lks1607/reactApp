// import Button from "./Button";
import styles from "./App.module.css"
import {useState,useEffect} from "react";


function App(){
  const [number, setNumber] = useState(0);
  const plus = () => setNumber((prev) => prev + 1);
  const minus = () => setNumber((prev) => prev - 1);

  useEffect(() => console.log('counter click'),[number]);

  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    setTodos((currentArray => [toDo, ...currentArray]));
    setTodo("");
  }

  return (
   <div>
    <div>
    <h1>Counter</h1>
    <h2>{number}</h2>
    <button onClick = {plus}>+1</button>
    <button onClick = {minus}>-1</button>
    </div>

    <hr />

    <div>
      <h1>My Todo-List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="목표를 적어주세요"></input>
        <button>전송</button>
      </form>

      <ul>
        {toDos.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  </div>
  )
}
export default App;
