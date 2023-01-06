// import Button from "./Button";
import styles from "./App.module.css"
import {useState,useEffect} from "react";


function App(){
  const [toDo,setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setTodos((currentArray) => ([toDo, ...currentArray]));
    setTodo("");
  }
  return (
    <div>
      <h1>My Todo-List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="자신의 목표를 적으세요."></input>
      <button>전송</button>
      </form>
      <hr />

      <ul>
        {toDos.map((item,index)=>(<li key={index}>{item}</li>))}
      </ul>
    </div>

  )
}
export default App;
