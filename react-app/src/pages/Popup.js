import AppHeader from '../components/AppHeader.js';
import Modal from './../components/Modal.js';
import React, { useState } from "react";

function Popup(){
  //비구조화 할당
  const [show, setShow] = useState(false);
  const openPop = (e) => {
    setShow(true);
  }
  const closePop = (e) => {
    setShow(false);
  }
  
  const modalPop = {
    title: '타이틀',
    content: '확인버튼을 눌러주세요~',
    type : "confirm"
  }

  return (
    <>
      <AppHeader title="Popup" />
      <div className='container'>
        <button className="btn L" onClick={openPop}>alert</button>
        <button className="btn L" onClick={openPop}>comfirm</button>
      </div>
      <Modal 
        isOpen={show}
        isClose={closePop}
        title={modalPop.title} 
        content={modalPop.content} 
        type={modalPop.type}
        />
    </>
  );
}
export default Popup;
