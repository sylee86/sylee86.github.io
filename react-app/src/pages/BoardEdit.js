import boardInfo from "db/boardInfo.json" 
import PagePrev from "components/PagePrev" 
import { useParams } from "react-router-dom"; 
import { useState } from "react";

function BoardEdit(){
  let para = useParams(); // url 파라미터
  let matchItem = boardInfo.list.find(function(item){
    if(item.id == para.id) return true;
  }) 
  const [form, setValue] = useState({
    title : '',
    content : '',
  }); 

  const changeVal = (e) => {
    const { name, value } = e.target;
    setValue({
      ...form,
      [name]: value
    })
  }
  const submitVal = (e) => {
    e.preventDefault();
    //onSaveData(form)
    setValue({ //초기화
      title : '',
      content : '',
    })
  }

  return (
    <div>
      <header className="header">
        <PagePrev />
        <h1>게시판 수정</h1>
      </header>
      <form className="boardDetail" onSubmit={submitVal}>
        <dl>
          <dt>제목</dt>
          <dd><input type="text" name="title" defaultValue={matchItem.title} onChange={changeVal} /></dd>
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
          <dd><textarea name="content" defaultValue={matchItem.content} onChange={changeVal}></textarea></dd>
        </dl>

        <div className="btns r">
          <button type="submit" className="btnS">확인</button>
        </div>
      </form>
    </div>
  );
}


export default BoardEdit;
