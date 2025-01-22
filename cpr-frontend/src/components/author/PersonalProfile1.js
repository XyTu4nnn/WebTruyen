import React from "react";

function PersonalProfile() {
  return (
    <div className="w-full lg:w-3/4 pb-4 bg-white">
      <div className="bg-red-200 m-4 text-red-700 text-center py-3 font-semibold text-sm mb-4">
        Chỉ chấp nhận nội dung phù hợp với thuần phong mỹ tục và pháp luật Việt
        Nam. Tác giả lưu ý khi đăng tải tác phẩm. Nếu vi phạm bạn có thể bị khóa
        truyện, nếu tái phạm có thể bị khóa tài khoản vĩnh viễn.
      </div>

      <div className="mb-4">
        <div className="text-center">
          <img
            src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-512.png"
            alt="avatar"
            className="rounded-full mx-auto w-24 h-24 mb-2 border-4"
          />
          <p className="text-lg font-bold">Nguyễn Nhật Ánh</p>
          <p className="text-gray-600 text-sm">Chưa có cấp bậc</p>
          <p className="text-sm text-gray-700 mt-2">
            Tỷ lệ chia sẻ doanh thu:{" "}
            <span className="font-bold">60% - 40%</span>
          </p>
        </div>
      </div>
      {/* Thống kê */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 text-center">
        <div className="border rounded-lg py-2 shadow">
          <p className="text-sm text-gray-500">Tổng truyện đã đăng</p>
          <p className="text-lg font-bold text-gray-800">0</p>
        </div>
        <div className="border rounded-lg py-2 shadow">
          <p className="text-sm text-gray-500">Tổng chương đã đăng</p>
          <p className="text-lg font-bold text-gray-800">0</p>
        </div>
        <div className="border rounded-lg py-2 shadow">
          <p className="text-sm text-gray-500">Tổng lượt đọc</p>
          <p className="text-lg font-bold text-gray-800">0</p>
        </div>
      </div>

      {/* 6 cấp bậc */}
      <div className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {/* Cấp bậc: Chưa có cấp */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-sm font-semibold">
              0
            </div>
            <p className="text-sm text-gray-600 mt-2">Chưa có cấp</p>
            <ul className="text-xs text-gray-500 mt-1">
              <li>- Tổng chương: 0</li>
              <li>- Tổng doanh thu: 0 VNĐ</li>
            </ul>
          </div>

          {/* Cấp bậc: Tập Sự */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-sm font-semibold">
              10
            </div>
            <p className="text-sm text-gray-600 mt-2">Tập Sự</p>
            <ul className="text-xs text-gray-500 mt-1">
              <li>- Tổng chương: ≥ 10</li>
              <li>- Tổng doanh thu: ≥ 1.000 VNĐ</li>
            </ul>
          </div>

          {/* Cấp bậc: Bán Chuyên */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-sm font-semibold">
              20
            </div>
            <p className="text-sm text-gray-600 mt-2">Bán Chuyên</p>
            <ul className="text-xs text-gray-500 mt-1">
              <li>- Tổng chương: ≥ 20</li>
              <li>- Tổng doanh thu: ≥ 10.000 VNĐ</li>
            </ul>
          </div>

          {/* Cấp bậc: Chuyên Nghiệp */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-sm font-semibold">
              30
            </div>
            <p className="text-sm text-gray-600 mt-2">Chuyên Nghiệp</p>
            <ul className="text-xs text-gray-500 mt-1">
              <li>- Tổng chương: ≥ 30</li>
              <li>- Tổng doanh thu: ≥ 30.000 VNĐ</li>
            </ul>
          </div>

          {/* Cấp bậc: Cao Cấp */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-sm font-semibold">
              50
            </div>
            <p className="text-sm text-gray-600 mt-2">Cao Cấp</p>
            <ul className="text-xs text-gray-500 mt-1">
              <li>- Tổng chương: ≥ 50</li>
              <li>- Tổng doanh thu: ≥ 50.000 VNĐ</li>
            </ul>
          </div>

          {/* Cấp bậc: Master */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-sm font-semibold">
              100
            </div>
            <p className="text-sm text-gray-600 mt-2">Master</p>
            <ul className="text-xs text-gray-500 mt-1">
              <li>- Tổng chương: ≥ 100</li>
              <li>- Tổng doanh thu: ≥ 200.000 VNĐ</li>
            </ul>
          </div>
        </div>

        {/* Thanh tiến độ */}
        <div className="relative mt-4">
          <div className="absolute w-full h-1 bg-gray-300"></div>
          <div
            className="absolute h-1 bg-blue-500"
            style={{ width: "20%" }}
          ></div>
        </div>
      </div>
      {/* Điều kiện nâng cấp */}
      <div className="bg-gray-50 p-4 border rounded-lg mb-4">
        <p className="text-gray-700 font-semibold">
          Bạn chưa đủ điều kiện tăng cấp.
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
          <li>Bạn phải có ít nhất 1 truyện được duyệt.</li>
        </ul>
      </div>

      {/* Các phần còn lại như thống kê, cấp bậc, chi tiết thông tin */}
      {/* Đây là phần nội dung chi tiết của profile */}
      <div className="space-y-2 text-gray-700 text-sm">
        <p>
          <span className="font-semibold">Email:</span> nhatanh@gmail.com
        </p>
        <p>
          <span className="font-semibold">CCCD/CMND:</span> 0123456789001
        </p>
        <p>
          <span className="font-semibold">Tên hiển thị:</span> Nguyễn Nhật Ánh
        </p>
        <p>
          <span className="font-semibold">Giới thiệu:</span> Nguyễn Nhật Ánh là
          nhà văn nổi tiếng tại Việt Nam, được biết đến qua các tác phẩm dành
          cho thiếu nhi...
        </p>
      </div>

      <div className="text-center mt-6">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Lưu Thay Đổi
        </button>
      </div>
    </div>
  );
}

export default PersonalProfile;
