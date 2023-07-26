
import Main from './pages/Main.js';
import BoardList from './pages/BoardList.js';
import Todolist from './pages/Todolist.js';
import BoardDetail from './pages/BoardDetail.js';
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
          {/* board */}
          <Route path="/boardDetail/:id" element={<BoardDetail />} />
          {/* Todolist */}
          <Route path="/Todolist" element={<Todolist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
