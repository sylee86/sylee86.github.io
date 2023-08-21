import { useState, useCallback } from 'react';
import { Link } from "react-router-dom"; 

function TodoInsert(){
  const [toDo, setToDo] = useState(""); 
  const [toDos, setToDos] = useState([]);
  const inpValue = (e) => {
    setToDo(e.target.value);
    console.log(toDo);
  }
  
  return (
    <div>
      <header className="header">
        <Link className="btn" to="/">
          <i className="gg-home"></i>
          <span className="blind">home</span>
        </Link>
        <h1>To do List</h1>
      </header>
      <form>
        <div className="todoInput">
          <input type="text" name="todoitem" onChange={inpValue} placeholder="해야할 일을 입력해주세요." />
          <button className="btn S">전송</button>
        </div>
      </form>
    </div>
  );
}


export default TodoInsert;
