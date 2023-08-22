import AppHeader from './../components/AppHeader.js';
import React, {useState, useEffect} from 'react';

function Counter(){
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    //setNumber(number + 1);
    setNumber(prevNumber => prevNumber + 1);
  }
  const onDecrease = () => {
    //setNumber(number - 1);
    setNumber(prevNumber => prevNumber - 1);
  }
  //처음 렌더링될때 한번 실행
  useEffect(() => {
    setNumber(number + 100);
  }, []);
  return (
    <div>
      <AppHeader title="Counter" />
      <div className='counter'>
        <strong>{number}</strong>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onIncrease}>+1</button>
      </div>
    </div>
  );
}
export default Counter;
