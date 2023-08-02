import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 

const Main = () => {
  let navigate = useNavigate();
  let goBoard = () => {
    navigate("/BoardList");
  }
  let goTodolist = () => {
    navigate("/todolist");
  }
  let goTodolist2 = () => {
    navigate("/todolist2");
  }
  return (
    <div>
      <header className="header">
        <Link className="btn" to="/">
          <i className="gg-home"></i>
          <span className="blind">home</span>
        </Link>
        <h1>React</h1>
      </header>
      <div className="main">
        <p>react 연습중입니다.</p><br />
        <div className="btns">
          <button type="button" className="btn L" onClick={() => goBoard()}>게시판 바로가기</button>
          <button type="button" className="btn L" onClick={() => goTodolist()}>todoList 바로가기</button>
          <button type="button" className="btn L" onClick={() => goTodolist2()}>todoList2 바로가기</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
