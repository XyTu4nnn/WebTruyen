// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";

import AuthorRoute from "./components/routes/AuthorRoute";
import AdminRoute from "./components/routes/AdminRoute";

import CreateStoryRoute from "./components/routes/CreateStoryRoute";

import BookViewPage from "./components/BookViewPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/author-accounts" element={<AuthorRoute />} />
        <Route path="/admin-accounts" element={<AdminRoute />} />
        <Route path="/create-story" element={<CreateStoryRoute />} />
        {/* Apply CreateStoryRoute */}
        <Route path="/book-view-page" element={<BookViewPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
