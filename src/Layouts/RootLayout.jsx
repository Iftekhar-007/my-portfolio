import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

// bg-[#1B3C53]

const RootLayout = () => {
  return (
    <div className="bg-gray-100">
      <div className="sticky top-0 z-10">
        <Header></Header>
      </div>

      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
