import React from "react";
import { Outlet } from "react-router-dom";
import BlockBreak from "../../components/common/block_break/BlockBreak";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Hero from "../../components/common/hero/Hero";
const General = () => {
  return (
    <>
      <section className="w-full h-full  bg-slate-50 px-20 mx-auto">
        <Header />
        <div className="px-5">
          <Hero />
        </div>
        <BlockBreak />
        <div className="px-5">
          <Outlet />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default General;
