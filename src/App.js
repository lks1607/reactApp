// import Button from "./Button";
import styles from "./App.module.css"
import {useState,useEffect} from "react";


function App(){
  const [number, setNumber] = useState(0);
  const [keyword, setValue] = useState("");

  const plus = () => setNumber((prev) => prev + 1);
  const minus = () => setNumber((prev) => prev - 1);
  const onChange = (event) => setValue(event.target.value);

  useEffect(() => console.log("I run for count"), [number]);
  useEffect(() => {
    if(keyword.length >= 5){
      return console.log("I Search For " + keyword)
    }
  },[keyword]);


  return (
    <div>
      <h1>React</h1>
      <input type="text" placeholder="Search Here!" onChange={onChange} value={keyword}></input>
      <h2>검색 키워드 : {keyword}</h2>
      <h2>{number}</h2>
      <button onClick = {plus} >+1</button>
      <button onClick = {minus}>-1</button>
    </div>
  )
}
export default App;
