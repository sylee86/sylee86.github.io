

import Main from './pages/Main.js';
import Todolist from './pages/Todolist.js';
import Todolist2 from './pages/Todolist2.js';
import BoardList from './pages/BoardList.js';
import BoardDetail from './pages/BoardDetail.js';
import BoardEdit from './pages/BoardEdit.js';
import BoardWrite from './pages/BoardWrite.js';
import { Routes, Route, BrowserRouter } from "react-router-dom"; // eslint-disable-line no-unused-vars


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
          <Route path="/BoardEdit/:id" element={<BoardEdit />} />
          {/* board Write */}
          <Route path="/BoardWrite" element={<BoardWrite />} />
          {/* Todolist */}
          <Route path="/Todolist" element={<Todolist />} />
          {/* Todolist2 */}
          <Route path="/Todolist2" element={<Todolist2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
