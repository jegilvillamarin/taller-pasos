import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wizard from "./pages/Wizard";
import Resumen from "./pages/Resumen";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wizard />}></Route>
        <Route path="/resumen" element={<Resumen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
