import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import PyTracking from "./pages/PyTracking";
import ArsDemo from "./pages/ArsDemo";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MoreProjects from "./pages/MoreProjects";
import BucketList from "./pages/BucketList";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App" id="top">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more-projects" element={<MoreProjects />} />
          <Route path="/py-tracking-demo" element={<PyTracking />} />
          <Route path="/ars-demo" element={<ArsDemo />} />
          <Route path="/bucket-list" element={<BucketList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
