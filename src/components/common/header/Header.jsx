import React from "react";
import { ImCamera } from "react-icons/im";
import { HiHome } from "react-icons/hi";
import { TbWriting } from "react-icons/tb";
import { ImMusic } from "react-icons/im";

const Header = () => {
  const listLi = [
    {
      icon: <HiHome className="mr-2" />,
      text: "Trang chủ",
    },
    {
      icon: <TbWriting className="mr-2" />,
      text: "Tự sự",
    },
    {
      icon: <ImCamera className="mr-2" />,
      text: "Nhiếp ảnh",
    },
    {
      icon: <ImMusic className="mr-2" />,
      text: "Âm nhạc",
    },
  ];
  return (
    <React.Fragment>
      <header className="flex items-center py-4 border-b border-b-gray-300">
        <div className="ml-12">
          <h1>NhutHuynh</h1>
        </div>
        <ul className="flex ml-auto mr-14">
          {listLi.map((item, idx) => {
            return (
              <li
                key={idx}
                className="ml-12 text-title text-xl font-medium flex items-center cursor-pointer border-b-2 border-transparent hover:border-gray-600 transition all delay-175 duration-500"
              >
                {item.icon} {item.text}
              </li>
            );
          })}
        </ul>
        <div>
          <p className="py-2 px-4 border border-text_gray rounded-sm text-title cursor-pointer hover:border-color_primary  font-medium transition all delay-175 duration-500">
            Đăng nhập
          </p>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
