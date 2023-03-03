import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PyTracking from "./pages/PyTracking";
import ArsDemo from "./pages/ArsDemo";
import "./App.css";

function App() {
  return (
    <div className="App" id="top">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/py-tracking-demo" element={<PyTracking />} />
          <Route path="/ars-demo" element={<ArsDemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
