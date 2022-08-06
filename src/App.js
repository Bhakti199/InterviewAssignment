import "./App.css";
import { PageOne, PageTwo } from "./Pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageOne />} />
      </Routes>
      <Routes>
        <Route path="/pagetwo" element={<PageTwo />} />
      </Routes>
    </div>
  );
}

export default App;
