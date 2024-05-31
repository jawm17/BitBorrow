import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Borrow from "./pages/Borrow/Borrow";
import Lend from "./pages/Lend/Lend";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Borrow />} path="/borrow" exact />
        <Route element={<Lend />} path="/lend" exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
