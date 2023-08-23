import AppHeader from './../components/AppHeader.js';
import ToggleItem from "./ToggleItem"

function Toggle(){
  const datas = [
    {id:1, title:"토글버튼1", content:"내용입니다1"},
    {id:2, title:"토글버튼2", content:"내용입니다2"},
    {id:3, title:"토글버튼3", content:"내용입니다3"},
    {id:4, title:"토글버튼4", content:"내용입니다4"},
    {id:5, title:"토글버튼5", content:"내용입니다5"},
  ]

  return (
    <div>
      <AppHeader title="Toggle" />
      <div className="ToggleWrap">
        {datas.map(data => 
          <ToggleItem key={data.id} title={data.title} content={data.content} active={false} />
        )}
      </div>
    </div>
  );
}


export default Toggle;
