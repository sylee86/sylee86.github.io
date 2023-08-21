
import Main from './pages/Main.js';
import TodoTemplate from './pages/TodoTemplate.js';
import BoardList from './pages/BoardList.js';
import BoardDetail from './pages/BoardDetail.js';
import BoardEdit from './pages/BoardEdit.js';
import BoardWrite from './pages/BoardWrite.js';
import Hello from './pages/hello.js';
import Wrapper from './pages/Wrapper.js';
import Counter from './pages/Counter.js';
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
          <Route path="/BoardEdit/:id" element={<BoardEdit />} />
          {/* board Write */}
          <Route path="/BoardWrite" element={<BoardWrite />} />
          {/* TodoTemplate */}
          <Route path="/TodoTemplate" element={<TodoTemplate />} />
          {/* Counter */}
          <Route path="/Counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>

      <Wrapper>
        <Hello name="react" color="blue" isSpecial={true} />
        <Hello color="green" />
      </Wrapper>
    </div>
  );

}

export default App;
