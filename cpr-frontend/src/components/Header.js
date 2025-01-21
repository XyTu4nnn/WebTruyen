import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-xl font-bold">Trang Chủ</div>
        <nav className="flex space-x-4">
          <a href="/" className="text-gray-700">
            Trang Chủ
          </a>
          <a href="/" className="text-gray-700">
            Mới Cập Nhật
          </a>
          <a href="/recommendations" className="text-red-500">
            Thể Loại
          </a>
          <a href="/discussions" className="text-gray-700">
            Tác Giả
          </a>
          <a href="/author-accounts" className="text-gray-700">
            TK Tác Giả
          </a>
          <a href="/admin-accounts" className="text-gray-700">
            TK Admin
          </a>

          <a href="/create-story" className="text-gray-700">
            Trang Tạo Truyện
          </a>

          <a href="/book-view-page" className="text-gray-700">
            Trang xem truyện
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="border rounded px-2 py-1"
          />
          <button className="text-gray-700">🔍</button>
          <button className="text-gray-700">😎</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
