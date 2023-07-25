import boardInfo from "../db/boardInfo.json"  // eslint-disable-line no-unused-vars
import { useNavigate } from "react-router-dom"; // eslint-disable-line no-unused-vars

const BoardDetail = () => {
  let navigate = useNavigate();
  let goMain = () => {
    navigate("./../");
  }
  return (
    <div>
      <header className="header">
        <button className="home" type="button" onClick={() => goMain()}><i className="gg-home"></i><span className="blind">home</span></button>
        <h1>게시판 상세</h1>
      </header>
      <div className="boardDetail">
        <dl>
          

          {
            boardInfo.list.map((item, index) => (
              <dt key={item.id}>{item[1].title}</dt>
            ))
          }
{/* 
          {
            boardInfo.list.map((item, index) => (
              <dt key={item.id}>{item.title}</dt>
            ))
          } */}
        </dl>
      </div>
    </div>
  );
}


export default BoardDetail;
