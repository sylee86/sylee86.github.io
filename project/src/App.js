import Header from './components/Header.js';
import Main from './pages/Main.js';
import BoardList from './pages/BoardList.js';
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
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
