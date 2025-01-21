import React, { useState, useEffect } from "react";

function BookViewPage() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    "https://reviewsach.net/wp-content/uploads/2018/10/Tuo%CC%82%CC%89i-tre%CC%89-%C4%91a%CC%81ng-gia%CC%81-bao-nhie%CC%82u-review.png",
    "https://file.hstatic.net/1000362347/article/ban_la_mot_ngoi_sao_dang_cho_ngay_toa_sang_990e617ce8564a578885104a5ebb01a1.png",
    "https://gocnhoannie.com/wp-content/uploads/2017/01/tuoi-tre-dang-gia-bao-nhieu-rosie-nguyen-1000x600.jpg",
  ];

  // Tự động chuyển ảnh sau mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); // 3000ms = 3s

    return () => clearInterval(interval); // Xóa bộ đếm khi component unmount
  }, [banners.length]);

  const handleNextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const handlePrevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Top Section: Banner Slider */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${banners[currentBanner]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrevBanner}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNextBanner}
        >
          &#8250;
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentBanner ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Text Content */}
      <div className="w-full sm:w-3/4 lg:w-2/3 m-4 sm:m-8 p-4 sm:p-8 mt-4 shadow-md rounded-md bg-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Tuổi trẻ đáng giá bao nhiêu?
        </h2>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Phần 1: Tôi đã học như thế nào.
        </h2>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          NẾU TÔI CÒN HAI MƯƠI
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          "Những thói quen tốt ta hình thành khi còn trẻ không tạo nên khác biệt
          nhỏ nào, đúng hơn, chúng tạo ra tất cả khác biệt."
        </p>
        <p className="text-gray-700 text-sm sm:text-base mt-4">
          1. Luyện tập thể lực Các hoạt động như chạy bộ, tập gym ngoài trời
          thường không tốn nhiều chi phí. Đi bơi chỉ vài nghìn đồng một vé, hoặc
          tham gia các lớp học võ ở trung tâm thể thao quận huyện cũng rất rẻ.
          Nếu chịu khó tìm kiếm, bạn sẽ thấy nhiều câu lạc bộ rèn luyện sức khỏe
          miễn phí gần nơi ở. Luyện tập thể lực không chỉ giúp bạn có một sức
          khỏe tốt mà còn cải thiện tinh thần, đào thải độc tố tích tụ từ môi
          trường và thực phẩm không lành mạnh. Một cơ thể khỏe mạnh là nền tảng
          cho một cuộc sống tốt đẹp. Hơn nữa, tham gia các cộng đồng luyện tập
          còn giúp mở rộng mối quan hệ, tầm nhìn, và quan điểm về cuộc sống.
          <br></br>
          2. Đọc sách Tri thức nhân loại phần lớn nằm trong sách. Báo và tạp chí
          chỉ chứa thông tin ngắn hạn, trong khi mạng xã hội hiện nay thường
          tràn ngập tin rác. Đọc sách giúp bạn thay đổi cuộc đời. Khi tinh thần
          xuống dốc, không muốn làm gì, hãy thử đọc sách. Sách không chỉ nâng
          cao kiến thức mà còn truyền cảm hứng, thúc đẩy hành động tích cực hơn.
          Dù sách giấy không rẻ, bạn có thể tìm các trang web cung cấp ebook
          miễn phí hoặc chọn đọc sách tiếng Anh để vừa học kiến thức vừa nâng
          cao từ vựng. Hãy đặt mục tiêu đọc một cuốn sách mỗi tuần, và sau một
          năm bạn sẽ thấy sự khác biệt lớn trong vốn hiểu biết của mình.{" "}
          <br></br>
          3. Học trực tuyến Các khóa học trực tuyến cung cấp kiến thức về nhiều
          lĩnh vực như nghệ thuật, lịch sử, kinh tế, lập trình, thiên văn học,
          vũ trụ... Bạn chỉ cần tạo tài khoản và bắt đầu học. Học trực tuyến
          đang ngày càng phổ biến, bổ sung và thay thế hình thức giáo dục truyền
          thống. Ưu điểm của nó là bạn không cần di chuyển, tự chọn thời gian
          học phù hợp, và có thể học nhiều kỹ năng hữu ích mà trường lớp chưa
          dạy. Hãy tận dụng thời gian rảnh để tham gia các khóa học, học thêm kỹ
          năng mới hoặc nâng cao kiến thức chuyên môn, thay vì chìm đắm trong
          những nỗi buồn vô ích. <br></br>
          4. Cho dân du lịch bụi ở nhờ Hiện nay, nhiều bạn trẻ thích đi du lịch
          bụi. Trong khi chưa đủ điều kiện để đi, bạn có thể tham gia cho khách
          du lịch ở nhờ tại nhà mình. Những trải nghiệm này không chỉ giúp bạn
          có thêm bạn bè quốc tế mà còn nhận được những câu chuyện lữ hành thú
          vị. Nếu không tiện cho ở nhờ, bạn có thể gặp gỡ, trò chuyện hoặc dẫn
          khách đi tham quan xung quanh khu vực sinh sống. <br></br>5. Đi du
          lịch bụi Đi du lịch bụi không cần quá nhiều tiền. Bạn có thể đến các
          tỉnh gần nơi mình ở trong ngày, hoặc nếu có thời gian, hãy thử hành
          trình dài hơn trong kỳ nghỉ hè. Chìa khóa của du lịch bụi không nằm ở
          số tiền bạn có mà là sự can đảm. Can đảm bước ra khỏi vùng an toàn,
          làm điều mới, và trải nghiệm. Có thể đi bộ, đi xe đạp, hoặc đi nhờ xe.
          Ngoài ra, bạn cũng có thể làm việc tình nguyện để đổi lấy nơi ăn ở.
          Những chuyến đi sẽ giúp bạn hiểu đời, hiểu người hơn, và mang lại
          nhiều kỷ niệm không thể quên.
        </p>
      </div>
    </div>
  );
}

export default BookViewPage;
