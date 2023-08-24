import { useState } from "react";

function ToggleItem({title, content, active}){

  const [isActive, setIsActive] = useState(active);

  // const getSiblings = elm => elm && elm.parentNode && [...elm.parentNode.children].filter(node => node != elm);
  // getSiblings(element);

  const toggleSlide = (e) => {
    e.preventDefault();

    setIsActive(!isActive); //true, false 반대로
    const el = e.currentTarget.parentNode.parentNode.childNodes
    const active = e.currentTarget.parentNode.dataset.state;

    el.forEach(element => {
      if(element.dataset.state == true) {
        console.log('11')
      }
    });

    //모든 el 중에 state가 true 인게 있으면 
    // 그 애들만 ㄴㅅ
  }
  return (
    <div className={`toggleItem ${isActive ? "on" : ""}`} data-state={isActive}>
      <button className="tgBtn" onClick={toggleSlide} >{title}</button>
      <div className="tgCont">{content}</div>
    </div>
  );
}


export default ToggleItem;
