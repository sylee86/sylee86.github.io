import boardInfo from "../db/boardInfo.json"  // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom"; // eslint-disable-line no-unused-vars

const Todolist = () => {
  return (
    <div>
      <header className="header">
        <Link className="home" to="./../">
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
