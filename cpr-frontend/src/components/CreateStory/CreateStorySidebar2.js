// src/components/CreateStorySidebar2.js
import React from "react";

function CreateStorySidebar2() {
  return (
    <div className="w-full md:w-1/4 p-4 h-auto md:h-screen bg-gray-100 border-b md:border-r">
      {/* Admin Info */}
      <div className="pt-6 pb-6 text-center mb-6 bg-blue-100 rounded-lg">
        <img
          src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-512.png"
          alt="Admin Avatar"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-xl font-bold mt-2">Admin01</h2>
        <p className="text-sm text-gray-600">admin01@gmail.com</p>
      </div>
      {/* Sidebar Menu */}
      <ul className="space-y-4">
        <li className="text-gray-700 flex items-center cursor-pointer hover:text-blue-500">
          <span className="mr-2">👤</span> Hồ sơ cá nhân
        </li>
        <li className="text-gray-700 flex items-center cursor-pointer hover:text-blue-500">
          <span className="mr-2">🔒</span> Đăng xuất / Thoát
        </li>
        <li className="text-gray-700 flex items-center cursor-pointer hover:text-blue-500">
          <span className="mr-2">👥</span> Danh sách
        </li>
        <li className="text-gray-700 flex items-center cursor-pointer hover:text-blue-500">
          <span className="mr-2">🔔</span> Thanh toán
        </li>
        <li className="text-gray-700 flex items-center cursor-pointer hover:text-blue-500">
          <span className="mr-2">🧾</span> Doanh thu
        </li>
        <li className="text-gray-700 flex items-center cursor-pointer hover:text-blue-500">
          <span className="mr-2">🧾</span> Lịch sử giao dịch
        </li>
      </ul>
    </div>
  );
}

export default CreateStorySidebar2;
