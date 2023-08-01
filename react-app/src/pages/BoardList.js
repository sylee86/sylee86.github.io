import boardInfo from "./../db/boardInfo.json"  
import { Link } from "react-router-dom"; 

const BoardList = () => {
  return (
    <div>
      <header className="header">
        <Link className="btn" to="/">
          <i className="gg-home"></i>
          <span className="blind">home</span>
        </Link>
        <h1>게시판 목록</h1>
      </header>
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
