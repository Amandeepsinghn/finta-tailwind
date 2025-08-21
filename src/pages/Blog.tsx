import { useState } from "react";
import { SideBar } from "../component/Sidebar";

import axios from "axios";
const baseUrl = import.meta.env.VITE_ENDPOINT;
const Blog = () => {
  const blogData = [
    {
      id: 1,
      title: "5 Resume Tips That Beat ATS in 2025",
      summary:
        "Learn how to structure your resume to pass modern ATS systems using keywords, formatting, and structure best practices.",
      readTime: "3 min read",
      ref: "https://www.careerflow.ai/blog/best-resume-writing-tips",
    },
    {
      id: 2,
      title: "AI for Job Hunting: Tools That Give You an Edge",
      summary:
        "Explore the latest AI tools that optimize your job search, from email writing to instant job matches.",
      readTime: "5 min read",
      ref: "https://zapier.com/blog/ai-job-search/",
    },
    {
      id: 3,
      title: "Writing Better Cold Emails to Recruiters",
      summary:
        "Discover proven frameworks and examples that get responses when emailing hiring managers and recruiters.",
      readTime: "4 min read",
      ref: "https://in.indeed.com/career-advice/finding-a-job/cold-email-for-job",
    },
    {
      id: 4,
      title: "How to Tailor Your Resume for Every Job",
      summary:
        "Learn the importance of customizing your resume for each job description to increase your chances of getting shortlisted.",
      readTime: "5 min read",
      ref: "https://in.indeed.com/career-advice/resumes-cover-letters/tailoring-resume",
    },
  ];

  const [showSideBar, setSideBar] = useState<boolean>(true);
  return (
    <div className="flex min-h-screen">
      <SideBar showSideBar={showSideBar} setSideBar={setSideBar} />
      <div
        className={`flex-1 bg-gray-50  ${
          showSideBar ? "min-h-full" : "ml-20 min-h-screen md:ml-0 "
        }`}
      >
        <div className="p-6">
          <div className="text-3xl font-bold">📚 Explore Blogs</div>
          <div className="text-sm text-gray-600 pl-3">
            Stay updated with the best practices in resumes, emails, and job
            search strategy.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 grid-rows-1 gap-4  p-3">
            {blogData.map((data, index) => (
              <a
                className="flex flex-col shadow-md rounded bg-white p-2 cursor-pointer "
                key={index}
                onClick={async () => {
                  try {
                    const body = {
                      [`blog_${data.id}`]: true,
                    };

                    await axios.post(`${baseUrl}/api/newUpdateBlogs`, body, {
                      headers: {
                        Authorization: localStorage.getItem("token"),
                      },
                    });
                  } catch (error) {
                    console.error("Error updating blog:", error);
                  }
                }}
                href={data.ref}
                target="_blank"
              >
                <div className="text-gray-800">{data.title}</div>
                <div className="size-50">
                  <img loading="lazy" alt="img" src="idea.svg" />
                </div>
                <div className="font-bold">{data.title}</div>
                <div className="text-sm text-gray-500">{data.summary}</div>
                <div className="text-sm text-indigo-600">{data.readTime}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
