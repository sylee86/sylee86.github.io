import boardInfo from "./../db/boardInfo.json" 
import { Link } from "react-router-dom";

const Todolist = () => {
  return (
    <div>
      <header className="header">
        <Link className="btn" to="/">
          <i className="gg-home"></i>
          <span className="blind">home</span>
        </Link>
        <h1>To do List</h1>
      </header>
      <div className="boardList">
        <ul>
          {
            boardInfo.list.map((item) => (
              <li key={item.id}>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}


export default Todolist;
