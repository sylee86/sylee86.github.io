import { useNavigate } from 'react-router-dom';

function PagePrev() {
  let history = useNavigate();
  return (
    <button className="btn" type="button" onClick={() => {
      history(-1);
    }}>
      <i className="gg-prev"></i>
      <span className="blind">이전페이지</span>
    </button>
  );
}

export default PagePrev;
