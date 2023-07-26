import boardInfo from "../db/boardInfo.json"  // eslint-disable-line no-unused-vars
import { useNavigate, useParams } from "react-router-dom"; // eslint-disable-line no-unused-vars

function BoardEdit(){
  let navigate = useNavigate();
  let goMain = () => {
    navigate("/");
  }
  let para = useParams();
  let matchItem = boardInfo.list.find(function(item){
    if(item.id == para.id) 
    return true;
  })
  return (
    <div>
      <header className="header">
        <button className="home" type="button" onClick={() => goMain()}><i className="gg-home"></i><span className="blind">home</span></button>
        <h1>게시판 수정</h1>
      </header>

      <div className="btns r">
        <button className="btnS">확인</button>
      </div>
    </div>
  );
}


export default BoardEdit;
