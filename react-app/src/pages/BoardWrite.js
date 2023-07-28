import PagePrev from "./../components/PagePrev" 
import { useState } from "react";
import axios from "axios";

function BoardWrite(){
  const [form, setValue] = useState({
    title : '',
    author : '',
    content : '',
  }); 

  const changeVal = (e) => {
    const { name, value } = e.target;
    setValue({
      ...form,
      [name]: value
    })
  }

  // const setValue = inputs;

  const submitVal = (e) => {
    e.preventDefault();

    //console.log(form.title)
    onSubmit(form);
    

  }
  const BASE_URL = 'http://localhost:3001';
  const onSubmit = () => {
    axios.get(`${BASE_URL}/BoardList`, {
      title: "",
      author: "",
      content: "",
  }).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error.response);
  })
}

  return (
    <div>
      <header className="header">
        <PagePrev />
        <h1>게시판 작성</h1>
      </header>
      <form className="boardDetail" onSubmit={submitVal}>
        <dl>
          <dt>제목</dt>
          <dd><input type="text" name="title" onChange={changeVal} /></dd>
        </dl>
        <dl>
          <dt>작성자</dt>
          <dd><input type="text" name="author" onChange={changeVal} /></dd>
        </dl>
        <dl>
          <dt>작성일</dt>
          <dd></dd>
        </dl>
        <dl>
          <dt>내용</dt>
          <dd><textarea name="content" onChange={changeVal}></textarea></dd>
        </dl>

        <div className="btns r">
          <button type="submit" className="btnS">확인</button>
        </div>
      </form>
    </div>
  );
}


export default BoardWrite;
