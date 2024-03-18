import { Home, Experience } from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
