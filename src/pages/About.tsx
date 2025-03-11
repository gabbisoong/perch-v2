import React from "react";
import { Header } from "@/components/landing/Header";
import { AppStoreButtons } from "@/components/landing/AppStoreButtons";

const About = () => {
  return (
    <div className="bg-[rgba(249,249,245,1)] flex flex-col overflow-hidden items-stretch pt-5 px-5">
      <main className="bg-white shadow-[0px_21px_26px_10px_rgba(0,0,0,0.09)] flex w-full flex-col overflow-hidden items-stretch pt-[21px] rounded-3xl border-[rgba(0,0,0,0.06)] border-solid border-2 max-md:max-w-full">
        <Header />
        
        <div className="flex flex-col items-center px-4 py-16 md:py-24 overflow-hidden">
          <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-[45px] font-semibold leading-[1.1] text-center mb-12">
              Our Mission
            </h1>
            
            <div className="prose prose-lg mx-auto space-y-6">
              <p className="text-[20px] leading-[1.6] mb-8 text-gray-800">
                The initial product of Perch is a mobile app that puts the best writing on the Internet at your fingertips. 
                But the overarching purpose of Perch is to make great writing accessible.
              </p>

              <p className="text-[20px] leading-[1.6] mb-12 text-gray-800">
                Writing is how we store ideas, and ideas are the core driver of human progress. Writing lets each 
                generation begin life with a higher floor of knowledge than the last, and the easier it is to access 
                great writing, the faster society advances. That's why Gutenberg's invention is considered an inflection 
                point in human history even though it was mostly just stamps for letters and punctuation.
              </p>

              <p className="text-[20px] leading-[1.6] mb-8 text-gray-800">
                We are starting with a reading app to remove the three layers of friction we believe keep people from 
                reading more:
              </p>

              <div className="pl-6 mb-12">
                <div className="mb-8">
                  <h3 className="text-[22px] font-semibold mb-3">Cost</h3>
                  <p className="text-[18px] leading-[1.6] text-gray-700">
                    Writing is shockingly expensive. Twenty dollars for a book or a ten dollar monthly subscription is 
                    out of reach for most people. Perch will make it free. Lots of great writers already publish their 
                    content online for free, so we'll start with those. Then, once we've hit the scale required to 
                    support tasteful advertising, we'll share the majority of that revenue with writers to attract 
                    writing that currently sits behind paywalls. YouTube demonstrates how effective this model can be: 
                    it'd be silly for MrBeast to paywall his videos today.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-[22px] font-semibold mb-3">Discovery</h3>
                  <p className="text-[18px] leading-[1.6] text-gray-700">
                    Writing is scattered across millions of websites, newspapers, magazines, and books. Perch will show 
                    you exactly what you want to read, before you even knew you wanted to read it.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-[22px] font-semibold mb-3">Ease of use</h3>
                  <p className="text-[18px] leading-[1.6] text-gray-700">
                    Highlighting, picking up where you left off, audio, summarizing, themes, fonts, adjustable text 
                    sizes, and bookmarking should be seamless. And if your grandma can't figure out how to do it, 
                    it's too hard!
                  </p>
                </div>
              </div>

              <p className="text-[20px] leading-[1.6] mb-8 text-gray-800">
                We believe that removing each of these layers of friction will increase reading across the globe 
                dramatically, and an increase in reading is an increase in demand for writing. As the supply of 
                writing increases to meet this demand, so will our collective ideas and knowledge.
              </p>

              <p className="text-[20px] leading-[1.6] mb-24 text-gray-800">
                However, Perch won't stop there. We can already think of lots of ways to make great writing even 
                more accessible. For example, an e-reader would let people read before bed without using their 
                smartphone. And a free, open-source writing platform would allow even more people to publish their 
                ideas. So we'll build those too. This is a lifelong journey for us, and we're excited for you to 
                be a part of it.
              </p>
            </div>

            <div className="w-[450px] max-w-full mx-auto mt-20">
              <AppStoreButtons />
            </div>
          </div>
        </div>
      </main>
      <div className="text-[#666666] opacity-40 text-[14px] font-semibold leading-none text-center mt-8 mb-8">
        © 2025 Perch. All rights reserved.
      </div>
    </div>
  );
};

export default About;
