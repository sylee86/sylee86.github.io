import { useState } from "react";

function ToggleItem({title, content, active}){
  const [isActive, setIsActive] = useState(active);

  const toggleSlide = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  }
  return (
    <div className={`toggleItem ${isActive ? "on" : ""}`}>
      <button className="tgBtn" onClick={toggleSlide}>{title}</button>
      <div className="tgCont">{content}</div>
    </div>
  );
}


export default ToggleItem;
