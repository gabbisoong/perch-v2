import React from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { AppStoreButtons } from "@/components/landing/AppStoreButtons";

const Index = () => {
  return (
    <div className="bg-[rgba(249,249,245,1)] flex flex-col overflow-hidden items-stretch pt-5 px-5">
      <main className="bg-white shadow-[0px_21px_26px_10px_rgba(0,0,0,0.09)] flex w-full flex-col overflow-hidden items-stretch pt-[21px] rounded-3xl border-[rgba(0,0,0,0.06)] border-solid border-2 max-md:max-w-full">
        <Header />
        <Hero />
        <Features />


        <Footer />
      </main>
      <div className="text-[#666666] opacity-40 text-[14px] font-semibold leading-none text-center mt-8 mb-8">
        © 2025 Perch. All rights reserved.
      </div>
    </div>
  );
};

export default Index;
