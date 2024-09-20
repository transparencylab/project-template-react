import { useState } from "react";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ViteHome from "./Test/ViteHome";
import TestTailwind from "./Test/TestTailwind";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<ViteHome />} />
        <Route path="TestTailwind" element={<TestTailwind />} />
      </Routes>
    </Router>
  );
}

export default App;
