import AppHeader from './../components/AppHeader.js';
import { useState } from "react";

function InputSample(){
  const valStyle = {
    padding: "10px",
    color: "#fff",
  }
  
  {/* 1개 일때 */}
  const [value, setValue] = useState("")
  const val = (e) => {
    setValue(e.target.value)
  }
  const clearVal = () => {
    setValue("");
  }


  {/* 1개 이상 */}
  const [inputs, setInputs] = useState({
    nickname : "",
    descrition : ""
  })
  const {nickname, descrition} = inputs; // 비구조화 할당을 통해 값 추출
  const change = (e) => {
    const {name, value} = e.target
    setInputs({
      ...inputs, //기존의 input 객체를 복사
      [name] : value //name 키를 가진 값을 value로 설정
    })
  }
  const clearVal2 = () => {
    setInputs({
      "nickname":'',
      "descrition":''
    })
  }
  return (
    <div>
      <AppHeader title="Input 상태관리" />
      {/* 1개일때 */}
      <div style={valStyle}>
        <h1>[1] input 한개 관리</h1>
        <div className="todoInput pl0 pr0">
          <input type="text" onChange={val} value={value} />
          <button className="btn S" onClick={clearVal}>초기화</button>
        </div>
        <div>
          <b>값: {value}</b>
        </div>
      </div>

      {/* 여러개 */}
      <div style={valStyle} className='mt20'>
        <h1>[2] input 여러개 관리</h1>
        <div className="todoInput pl0 pr0">
          <input type="text" name="nickname" value={nickname} onChange={change} placeholder='닉네임'  />
          <input type="text" name="descrition" value={descrition} onChange={change} placeholder='설명' />
          <button className="btn S" onClick={clearVal2}>초기화</button>
        </div>
        <div>
          <b>값: {nickname}, {descrition}</b>
        </div>
      </div>
    </div>
  );
}
export default InputSample;
