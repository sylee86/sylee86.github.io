function wrapper({ children }){
  const style = {
    border : '3px solid black',
    background : "#fff"
  }
  return (
    <div style={style}>
      { children }
    </div>
  );
}

export default wrapper;
