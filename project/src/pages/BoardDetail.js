import boardInfo from "db/boardInfo.json";
import PagePrev from "components/PagePrev"; 
import { useNavigate, useParams } from "react-router-dom";

function BoardDetail(){
  let navigate = useNavigate();
  let goEdit = () => {
    navigate(`/BoardEdit/${para.id}`);
  }
  let para = useParams();
  let matchItem = boardInfo.list.find(function(item){
    if(item.id == para.id) return true;
  })
  return (
    <div>
      <header className="header">
        <PagePrev />
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

      <div className="btns r">
        <button className="btnS" onClick={() => goEdit()}>수정</button>
      </div>
    </div>
  );
}


export default BoardDetail;
