import { Link } from "react-router-dom"; 

function AppHeader(props) {
  return (
    <div className="header">
      <Link className="btn" to="/">
        <i className="gg-home"></i>
        <span className="blind">home</span>
      </Link>
      <h1>{props.title}</h1>
    </div>
  );
}

export default AppHeader;
