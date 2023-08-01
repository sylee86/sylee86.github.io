import { Link } from "react-router-dom";
import { useState } from "react";

const Todolist = () => {
  const [item, setItem] = useState([]); 
  const [todo, setTodo] = useState(""); 
  const inpValue = (e) => {
    setTodo(e.target.value);
  }
  const insertValue = (e) => {
    e.preventDefault();
    setItem((prevState) => {
      //console.log('등록하기 전의 names값', prevState);
      return [todo, ...prevState];
    })
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
          <button onClick={insertValue} className="btn S">전송</button>
        </div>
        <div className="todoList">
          {item.map((val, idx) => {
            return <div className="todoItem" key={idx}>
              {val}
            </div>
          })}
        </div>
      </form>
    </div>
  );
}


export default Todolist2;
