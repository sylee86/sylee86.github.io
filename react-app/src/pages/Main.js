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
  let goHello = () => {
    navigate("/Wrapper");
  }
  let goCounter = () => {
    navigate("/Counter");
  }
  let goInputSample = () => {
    navigate("/InputSample");
  }
  let goToggle = () => {
    navigate("/Toggle");
  }
  let goPopup = () => {
    navigate("/Popup");
  }
  return (
    <div>
      <AppHeader title="react" /> 
      <div className="main">
        <div className="btns">
          <button type="button" className="btn L" onClick={() => goBoard()}>게시판 바로가기</button>
          <button type="button" className="btn L" onClick={() => goTodolist()}>todoList 바로가기</button>
          <button type="button" className="btn L" onClick={() => goCounter()}>counter</button>
          <button type="button" className="btn L" onClick={() => goHello()}>props</button>
          <button type="button" className="btn L" onClick={() => goInputSample()}>input 상태관리</button>
          <button type="button" className="btn L" onClick={() => goToggle()}>toggle</button>
          <button type="button" className="btn L" onClick={() => goPopup()}>팝업</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
