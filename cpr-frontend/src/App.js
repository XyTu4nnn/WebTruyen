// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Đường dẫn đúng đến Header.js
import Footer from "./components/Footer"; // Đường dẫn đúng đến Footer.js
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import AuthorAccounts from "./components/AuthorAccounts";
import AdminAccounts from "./components/AdminAccount";
import CreateStory from "./components/CreateStory";
import BookViewPage from "./components/BookViewPage";

function App() {
  return (
    <BrowserRouter>
      {/* Header luôn hiển thị */}
      <Header />

      {/* Phần nội dung động */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/author-accounts" element={<AuthorAccounts />} />
        <Route path="/admin-accounts" element={<AdminAccounts />} />
        <Route path="/create-story" element={<CreateStory />} />
        <Route path="/book-view-page" element={<BookViewPage />} />
      </Routes>

      {/* Footer luôn hiển thị */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
