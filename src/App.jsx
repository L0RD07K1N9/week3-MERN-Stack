import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import ApiDemo from "./pages/ApiDemo";
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/api" element={<ApiDemo />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;