import React from "react";
import { Header } from "../landing/Header";

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, author, date, readTime, excerpt }) => {
  return (
    <article className="mb-16">
      <h2 className="text-[40px] font-semibold leading-tight mb-4">{title}</h2>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <span>{author}</span>
        <span>•</span>
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">{excerpt}</p>
      <button className="text-[#24BC8A] font-medium hover:underline">Read More</button>
    </article>
  );
};

export const Blog = () => {
  const blogPosts = [
    {
      title: "The future of books",
      author: "Mike McGuiness",
      date: "Feb 12, 2025",
      readTime: "3 min read",
      excerpt: "When a new technology appears, it rarely replaces what came before it overnight. Instead, it coexists for a while, and then, at some point, the old model starts to look ridiculous.",
    },
    {
      title: "How Perch will make reading free",
      author: "Mike McGuiness",
      date: "Feb 11, 2025",
      readTime: "5 min read",
      excerpt: "Reading is expensive. Books cost $20. A subscription to a newspaper or your favorite Substack author is $10 per month. Even scientific journals like Nature charge $200 per year.",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        <Header />
      </div>
      <div className="container mx-auto px-4 py-16">
      <div className="max-w-[700px] mx-auto">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
    </div>
  );
};
