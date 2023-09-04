
function Modal({isOpen, isClose, title, content, type}) {
  return (
    <div className={`modal alert ${isOpen ? "on" : ""}`}>
      <div className="mWrap">
        <div className="mHeader">
          <h1>{title}</h1>
          <button className="mClose" onClick={isClose}>닫기</button>
        </div>
        <div className="mCont">
          {content}
          {console.log(type)}
          {
            type === "alert" 
            ? <div className="btnWrap"><button className="btn S">확인</button></div>
            : ( type === "confirm"
                ? <div className="btnWrap"><button className="btn S">확인</button><button className="btn S">취소</button></div>
                : null
              )
          }
        </div>
      </div>
    </div>
  );
}
export default Modal;
