import { useNavigate } from "react-router-dom";
import AppHeader from './../components/AppHeader.js';

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
  let goHello = () => {
    navigate("/hello");
  }
  let goCounter = () => {
    navigate("/Counter");
  }
  return (
    <div>
      <AppHeader title="react" /> 
      <div className="main">
        <p>react 연습중입니다.</p><br />
        <div className="btns">
          <button type="button" className="btn L" onClick={() => goBoard()}>게시판 바로가기</button>
          <button type="button" className="btn L" onClick={() => goTodolist()}>todoList 바로가기</button>
          <button type="button" className="btn L" onClick={() => goTodolist2()}>todoList2 바로가기</button>
          <button type="button" className="btn L" onClick={() => goCounter()}>counter 바로가기</button>
          <button type="button" className="btn L" onClick={() => goHello()}>hello</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
