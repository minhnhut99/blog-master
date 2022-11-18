import React from "react";
import Header from "../../components/common/header/Header";
import Hero from "../../components/common/hero/Hero";
import Footer from "../../components/common/footer/Footer";
import BlockBreak from "../../components/common/block_break/BlockBreak";
import { IoIosArrowRoundForward } from "react-icons/io";
const Home = () => {
  return (
    <React.Fragment>
      <section className="w-full h-full  bg-slate-50 px-20 mx-auto">
        <Header />
        <div className="px-5">
          <Hero />
        </div>
        <BlockBreak />
        <div className="px-5">
          {/* tu su  */}
          <div>
            <div className="relative">
              <h2 className="text-5xl my-10 py-1 font-bold text-title ">
                Tự sự
              </h2>
              <div className="w-14 h-1 rounded absolute bg-bd_color_primary top-full"></div>
            </div>
            <div className="flex flex-wrap w-full overflow-hidden">
              <figure className="w-[calc(33.33%_-_25px)] mr-5 flex flex-col relative shadow-md bg-white rounded-md overflow-hidden">
                <img
                  className="bg-cover w-full h-80"
                  src="https://images.unsplash.com/photo-1576341592370-3151269da47e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhpbmtwYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="pl-2">
                  <div className="pt-4">
                    <div className="style-text-date">Tu Su - 18/11/2022</div>
                  </div>
                  <h4 className="mt-2 font-medium text-sub_title text-xl">
                    Vội vàng em đến và rồi đi
                  </h4>
                  <p className="mt-2 capitalize">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum ab dolore sequi autem, facilis eligendi minus
                    architecto explicabo minima ratione. Quos repellendus
                    assumenda voluptatum asperiores, nostrum sint reprehenderit
                    quae id.
                  </p>
                </div>
                <button className="absolute right-0 bottom-0 bg">
                  <IoIosArrowRoundForward color="#000000" size={45} />
                </button>
              </figure>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
