import AppHeader from './../components/AppHeader.js';
import Hello from './hello.js';

function Wrapper(){
  const style = {
    border : '3px solid black',
    background : "#fff",
  }
  return (
    <div>
      <AppHeader title="Props 예제" />
      <div style={style}>
        <Hello name="react" color="blue" isSpecial={true} />
        <Hello color="green" />
      </div>
    </div>
  );
}
export default Wrapper;
