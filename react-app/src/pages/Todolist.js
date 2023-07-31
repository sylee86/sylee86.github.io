import { Link } from "react-router-dom";
import { useState } from "react";

const Todolist = () => {
  const [form, setValue] = useState({
    todocont : '',
  }); 
  console.log(form);
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
          <input type="text" name="todocont" placeholder="해야할 일을 입력해주세요." />
          <button className="btnS">전송</button>
        </div>
        <div className="todoList">
          <ul>
          </ul>
        </div>
      </form>
    </div>
  );
}


export default Todolist;
