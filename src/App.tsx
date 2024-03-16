import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
