// src/components/admin/PersonalProfile.js
import React from "react";

import authorAccountsData from "../data/adminAccountsData";

function PersonalProfile() {
  return (
    <div className="lg:w-3/4 w-full p-6 bg-white">
      <h1 className="text-2xl font-bold text-center my-6">- TABLE USER -</h1>
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
                <td className="border px-4 py-2 text-center">{index + 1}</td>
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
                  <a href={account.updateLink} className="text-green-500 mx-2">
                    Cập nhật
                  </a>
                  <a href={account.deleteLink} className="text-red-500 mx-2">
                    Xóa
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonalProfile;
