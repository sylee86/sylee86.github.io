import AppHeader from './../components/AppHeader.js';
function Counter(){
  return (
    <div>
      <AppHeader title="Counter" />
      <div>
        <span>0</span>
        <button>-1</button>
        <button>+1</button>
      </div>
    </div>
  );
}

export default Counter;
