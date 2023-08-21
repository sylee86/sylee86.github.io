import { useState } from "react";

function todoItem({todo}){
  const [isActive, setIsActive] = useState(false);
  const [form, setValue] = useState({
    todocont : '',
  }); 
  const itemSave = (e) => {
    e.preventDefault();
    //setIsActive(!isActive);
  }

  return (
    <li>
      <input type="text" />
      <button className="btn S" ></button>
    </li>
  );
}


export default todoItem;
