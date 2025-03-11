import React from "react";
import { Header } from "../landing/Header";

export const Careers = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        <Header />
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-[700px] mx-auto">
          <h1 className="text-[40px] font-semibold mb-8">Careers at Perch</h1>
          
          <p className="text-lg mb-8">
            The <span className="underline">mission</span> of Perch is to make reading free. If this interests you and you want to help 
            invent <span className="underline">the future of books</span>, consider applying to one of the following open roles:
          </p>

          <ul className="list-disc pl-8 mb-8 space-y-4">
            <li>
              <a href="#" className="text-lg underline hover:text-[#24BC8A] transition-colors">
                Founding Engineer
              </a>
            </li>
            <li>
              <a href="#" className="text-lg underline hover:text-[#24BC8A] transition-colors">
                Founding Designer
              </a>
            </li>
          </ul>

          <p className="text-lg">
            The best way to apply is by sending an email to{" "}
            <a 
              href="mailto:team@perch.app" 
              className="text-[#24BC8A] hover:underline"
            >
              team@perch.app
            </a>{" "}
            with a brief explanation of why you're the best person for the role.
          </p>
        </div>
      </div>
    </div>
  );
};
