import boardInfo from "../db/boardInfo.json"  // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom"; // eslint-disable-line no-unused-vars

const BoardList = () => {
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
                <Link to="./../BoardDetail">
                  <span className="title">{item.title}</span>
                  <span className="date">{item.date}</span>
                  <span className="author">{item.author}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}


export default BoardList;
