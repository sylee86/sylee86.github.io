import { useNavigate } from "react-router-dom"; // eslint-disable-line no-unused-vars

const Main = () => {
  let navigate = useNavigate();
  let goBoard = () => {
    navigate("./BoardList");
  }
  let goMain = () => {
    navigate("./");
  }
  return (
    <div>
      <header className="header">
        <button className="home" type="button" onClick={() => goMain()}><i className="gg-home"></i><span className="blind">home</span></button>
        <h1>React</h1>
      </header>
      <div className="main">
        <p>react 연습중입니다.</p>
        <button type="button" onClick={() => goBoard()}>게시판 바로가기</button>
      </div>
    </div>
  );
}

export default Main;
