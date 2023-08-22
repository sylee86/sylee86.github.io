import boardInfo from "./../db/boardInfo.json"  
import AppHeader from './../components/AppHeader.js';
import { Link } from "react-router-dom"; 

const BoardList = () => {
  return (
    <div>
      <AppHeader title="게시판 목록" /> 
      <form className="boardList">
        <ul>
          {
            boardInfo.list.map((item) => (
              <li key={item.id}>
                <Link to={`/BoardDetail/${item.id}`}>
                  <span className="title">{item.title}</span>
                  <span className="author">{item.author}</span>
                  <span className="date">{item.date}</span>
                </Link>
              </li>
            ))
          }
        </ul>

        <div className="btns r">
          <Link className="btn S" to="/BoardWrite">작성</Link>
        </div>
      </form>
    </div>
  );
}

export default BoardList;
