import { useNavigate } from "react-router-dom"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom"; // eslint-disable-line no-unused-vars

const Main = () => {
  let navigate = useNavigate();
  let goBoard = () => {
    navigate("./BoardList");
  }
  let goTodolist = () => {
    navigate("./todolist");
  }
  return (
    <div>
      <header className="header">
        <Link className="home" to="./../">
          <i className="gg-home"></i>
          <span className="blind">home</span>
        </Link>
        <h1>React</h1>
      </header>
      <div className="main">
        <p>react 연습중입니다.</p><br />
        <div className="btns">
          <button type="button" onClick={() => goBoard()}>게시판 바로가기</button><br />
          <button type="button" onClick={() => goTodolist()}>todoList 바로가기</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
