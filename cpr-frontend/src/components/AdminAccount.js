import React, { useState } from "react";
import authorAccountsData from "./data/authorAccountsData";

function AdminAccount() {
  const [showStoriesMenu, setShowStoriesMenu] = useState(false);

  const toggleStoriesMenu = () => {
    setShowStoriesMenu(!showStoriesMenu);
  };

  return (
    <div className="container mx-auto mt-8">
      {/* Sidebar */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <aside className="lg:w-1/4 w-full p-4 h-auto bg-gray-100 border-r pb-40">
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
            <li
              className="text-gray-700 flex items-center cursor-pointer hover:text-blue-500"
              onClick={toggleStoriesMenu}
            >
              <span className="mr-2">👥</span> Danh sách
            </li>

            {showStoriesMenu && (
              <ul className="ml-4 space-y-2">
                <a
                  href="/"
                  className="text-gray-700 cursor-pointer hover:text-blue-500"
                >
                  Danh sách User
                </a>
                <br></br>

                <a
                  href="/create-story"
                  className="text-gray-700 cursor-pointer hover:text-blue-500"
                >
                  Danh sách Author
                </a>
              </ul>
            )}

            <li className="text-gray-700 flex items-center cursor-pointer hover:text-blue-500">
              <span className="mr-2">🔔</span> Thông báo
            </li>
            <li className="text-gray-700 flex items-center cursor-pointer hover:text-blue-500">
              <span className="mr-2">🧾</span> Lịch sử thanh toán
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4 w-full p-6 bg-white">
          {/* Title */}
          <h1 className="text-2xl font-bold text-center my-6">
            - TABLE USER -
          </h1>
          {/* User Table */}
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-center">STT</th>
                  <th className="border px-4 py-2 text-center">Hình Ảnh</th>
                  <th className="border px-4 py-2">Tài Khoản</th>
                  <th className="border px-4 py-2">Mật Khẩu</th>
                  <th className="border px-4 py-2 text-center">Cấp Độ</th>
                  <th className="border px-4 py-2 text-center">Cập Nhật</th>
                </tr>
              </thead>
              <tbody>
                {authorAccountsData.map((account, index) => (
                  <tr key={account.id} className="odd:bg-gray-50 even:bg-white">
                    <td className="border px-4 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <img
                        src={account.image}
                        alt={account.username}
                        className="w-12 h-12 rounded-full mx-auto"
                      />
                    </td>
                    <td className="border px-4 py-2">{account.username}</td>
                    <td className="border px-4 py-2">{account.password}</td>
                    <td className="border px-4 py-2 text-center">
                      <span
                        className={`${
                          account.level === "VIP 5"
                            ? "text-red-500"
                            : account.level === "VIP 3"
                            ? "text-green-500"
                            : "text-gray-700"
                        }`}
                      >
                        {account.level}
                      </span>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <a
                        href={account.updateLink}
                        className="text-green-500 mx-2"
                      >
                        Cập nhật
                      </a>
                      <a
                        href={account.deleteLink}
                        className="text-red-500 mx-2"
                      >
                        Xóa
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAccount;
