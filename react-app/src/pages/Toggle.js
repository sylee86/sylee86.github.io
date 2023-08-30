import AppHeader from './../components/AppHeader.js';
import { useState } from "react";

function Toggle(){
  const [datas, setDatas] = useState([
    {id:1, title:"토글버튼1", content:"내용입니다1", select:false},
    {id:2, title:"토글버튼2", content:"내용입니다2", select:false},
    {id:3, title:"토글버튼3", content:"내용입니다3", select:false},
    {id:4, title:"토글버튼4", content:"내용입니다4", select:false},
    {id:5, title:"토글버튼5", content:"내용입니다5", select:false},
  ]);


  const toggleSlide = (e) => {
    e.preventDefault();

    const idx = Number(e.currentTarget.parentNode.dataset.index);
    const newDatas = datas.map(k => {
      if (k.id === idx) {
        return {
          ...k,
          select: true,
        };
      } else {
        return {
          ...k,
          select: false,
        };
      }
    });
    setDatas(newDatas);
  }
  return (
    <div>
      <AppHeader title="Toggle" />
      <div className="ToggleWrap">
        {datas.map(data => 
          <div key={data.id} data-index={data.id} className={`toggleItem ${data.select == true ? "on" : ""}`}>
            <button className="tgBtn" onClick={toggleSlide} >{data.title}</button>
            <div className="tgCont">{data.content}</div>
          </div>
        )}
      </div>
    </div>
  );
}


export default Toggle;
