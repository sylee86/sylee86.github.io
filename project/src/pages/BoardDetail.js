import boardInfo from "../db/boardInfo.json"  // eslint-disable-line no-unused-vars
import { useNavigate, useParams } from "react-router-dom"; // eslint-disable-line no-unused-vars

function BoardDetail(title, value){
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
        <h1>게시판 상세</h1>
      </header>
      <div className="boardDetail">
        <dl>
          <dt>제목</dt>
          <dd>{matchItem.title}</dd>
        </dl>
        <dl>
          <dt>작성자</dt>
          <dd>{matchItem.author}</dd>
        </dl>
        <dl>
          <dt>작성일</dt>
          <dd>{matchItem.date}</dd>
        </dl>
        <dl>
          <dt>내용</dt>
          <dd>{matchItem.content}</dd>
        </dl>
      </div>

      <div>
        <button>수정</button>
      </div>
    </div>
  );
}


export default BoardDetail;
