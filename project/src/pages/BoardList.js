import boardInfo from "../db/boardInfo.json"  // eslint-disable-line no-unused-vars

const BoardList = () => {
  return (
    <div className="boardList">
      <ul>
        {
          boardInfo.list.map((item) => (
            <li key={item.id}>
              <a href="#!">
                <span className="title">{item.title}</span>
                <span className="date">{item.date}</span>
                <span className="author">{item.author}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}


export default BoardList;
