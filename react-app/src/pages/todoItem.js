import { useState } from "react";

const Todolist = () => {
  const [form, setValue] = useState({
    todocont : '',
  }); 
  const submitTodo = (e) => {
    e.preventDefault();
    //onSaveData(form)
    setValue({ //초기화
      todocont : '',
    })

    console.log(form)
  }

  return (
    <div>
    </div>
  );
}


export default todoItem;
