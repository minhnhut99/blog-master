import React from "react";
import Demo from "../../../assets/images/demo.jpg";
const Hero = () => {
  return (
    <div>
      <div className="flex h-auto w-full pt-24">
        <div className="w-2/3 h-fit">
          <p className="text-2xl">
            Cảm ơn bạn đã ghé thăm nhà của tôi. Chúc ai đọc được những dòng này
            đều trở nên hạnh phúc. Đây là nơi tôi lưu giữ những kỷ niệm của bản
            thân mình. Đối với tôi mục đích chúng ta đến với thế giới này là đi
            tìm hạnh phúc.Hạnh phúc là một từ rất rộng, khó có thể định nghĩa
            được. Tuy nhiên nó sẽ đến từ những điều đơn giản nhất - sẽ là những
            lời tự sự, những câu chuyện nhỏ, những bức hình mà tôi chụp được.
            Tôi sẽ kể cho mọi người bằng chính những kinh nghiệm nghiệp dư của
            mình. Hi vọng Nhà của mình sẽ giúp mọi người điều gì đó, mang đến
            cho mọi người một nụ cười chẳng hạn. Một lần nữa cảm ơn mọi người đã
            ghé qua...
          </p>
          <p className="ml-auto">Nhut Huynh</p>
        </div>
        <div className="w-1/3 h-fit">
          <img
            className="h-96 w-full object-cover rounded-md"
            src={Demo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
