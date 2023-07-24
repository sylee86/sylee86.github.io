import boardInfo from "../db/boardInfo.json"  // eslint-disable-line no-unused-vars
import { useNavigate } from "react-router-dom"; // eslint-disable-line no-unused-vars

const BoardList = () => {
  let navigate = useNavigate();
  let goMain = () => {
    navigate("./../");
  }
  return (
    <div>
      <header className="header">
        <button className="home" type="button" onClick={() => goMain()}><i className="gg-home"></i><span className="blind">home</span></button>
        <h1>게시판 목록</h1>
      </header>
      <div className="boardList">
        <ul>
          {
            boardInfo.list.map((item) => (
              <li key={item.id}>
                <a href="#!">
                  <span className="title">{item.title}</span>
                  <span className="date">{item.date}</span>
                  <span className="author">{item.author}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}


export default BoardList;
