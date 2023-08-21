function hello({color, name, isSpecial}){
  return (
    <div style={{color}}>
      Hello, {name} 
      { isSpecial && <b>*</b>  /* { isSpecial ? <b>*</b> : null } */}
    </div>
  );
}

hello.defaultProps = {
  name: "이름없음"
}


export default hello;
