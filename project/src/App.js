
import Main from './pages/Main.js';
import Todolist from './pages/Todolist.js';
import BoardList from './pages/BoardList.js';
import BoardDetail from './pages/BoardDetail.js';
import BoardEdit from './pages/BoardEdit.js';
import { Routes, Route, BrowserRouter } from "react-router-dom";


const App = () => {
  return (

    <div className="wrap">
      <BrowserRouter>
        <Routes>
          {/* main */}
          <Route path="/" element={<Main />} />
          {/* board */}
          <Route path="/boardlist" element={<BoardList />} />
          {/* board detail */}
          <Route path="/boardDetail/:id" element={<BoardDetail />} />
          {/* board Edit */}
          <Route path="/BoardEdit" element={<BoardEdit />} />
          {/* Todolist */}
          <Route path="/Todolist" element={<Todolist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
