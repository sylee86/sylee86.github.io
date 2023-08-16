import { Link } from "react-router-dom";
import { useState } from "react";

const Todolist2 = () => {
  const [item, setItem] = useState([]);
  const [isActive, setIsActive] = useState(false);
  
  const insertItem = (e) => {
    e.preventDefault();
    setItem((prevState) => {
      return [item, ...prevState];
    })
  }
  const itemSave = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
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
          <div className="tit">해야할 일</div>
          <button onClick={insertItem} className="btn plus">
            <i class="gg-plus"></i>
            <span className="blind">추가</span>
          </button>
        </div>
        <div className="todoList insert">
          {item.map((val, idx) => {
            return <div className={`todoItem ${isActive ? "active" : ""}`} key={idx}>
              <input type="text"  />
              <button className="btn S" onClick={itemSave}>저장</button>
            </div>
          })}
        </div>
      </form>
    </div>
  );
}


export default Todolist2;
