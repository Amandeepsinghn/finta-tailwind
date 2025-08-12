import React, { useCallback, useEffect, useState } from "react";
import { SideBar } from "../component/Sidebar";
import { useDropzone } from "react-dropzone";
import type { AxiosError } from "axios";
import axios from "axios";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_ENDPOINT;

interface atsScore {
  score: number;
  name: string;
}

interface getAllResume {
  id: string;
  name: string;
  score: number;
  good: string[];
  bad: string[];
  area_improvement: string[];
  userId: string;
  resumeUrl: string;
}

const Ats = () => {
  const formData = new FormData();
  const [uploadedResume, setUploadedResume] = useState<string>("");
  const [score, setScore] = useState<atsScore>();
  const [resume, setResume] = useState<getAllResume[]>();

  const onDrop = useCallback(async (files: File[]) => {
    if (files[0].type === "application/pdf") {
      formData.append("file", files[0]);
      setUploadedResume(files[0].name);
      try {
        alert("pdf uploaded");
      } catch (error: unknown) {
        const err = error as AxiosError;

        if (err.response) {
          alert("unable to upload file please try again later.");
        }
      }
    } else {
      alert("please upload pdf file");
    }
  }, []);

  useEffect(() => {
    const fetchScore = async () => {
      const scoreData = await axios.get(`${baseUrl}/api/getLatestScore`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setScore(scoreData.data);
    };
    fetchScore();
  }, []);

  useEffect(() => {
    const fetchResume = async () => {
      const allData = await axios.get(`${baseUrl}/api/getAllResume`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setResume(allData.data.body);
    };
    fetchResume();
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [showSideBar, setSideBar] = useState<boolean>(true);
  return (
    <div className="flex ">
      <SideBar showSideBar={showSideBar} setSideBar={setSideBar} />
      <div
        className={`flex-1 bg-gray-50 ${
          showSideBar ? "h-screen" : "ml-20 h-screen md:ml-0 "
        }`}
      >
        <div className="p-6">
          <h2 className="font-bold text-gray-800 text-2xl">
            Resume ATS Checker
          </h2>
          <div className="grid grid-cols-1 grid-rows-2 gap-8  text-gray-800 mt-5">
            <div className=" flex flex-col items-start p-4 space-y-2 shadow-md border-gray-200 rounded-lg">
              <div className="font-bold">📤 Upload Your Resume (PDF)</div>
              <div className="flex justify-start space-x-2 items-center">
                <div
                  className="text-white bg-indigo-600 hover:bg-indigo-700 p-2 rounded-md text-shadow-2xs cursor-pointer"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  Choose File
                </div>
                {uploadedResume == "" && (
                  <div className="text-gray-700">No file chosen</div>
                )}
              </div>
              <div className="text-green-400">{uploadedResume}</div>
            </div>
            <div className=" flex flex-col items-start p-4 space-y-2  shadow-md border-gray-200 rounded-lg">
              <div className="font-bold">📈 Latest ATS Score</div>
              <div className="text-gray-600">{score?.name}</div>
              <div className="h-2 w-full bg-gray-200">
                <div
                  className="h-2 w-full bg-indigo-600"
                  style={{ width: `${score?.score}%` }}
                ></div>
              </div>
              <div className="text-gray-600 flex justify-start space-x-2.5">
                <div className="">Score</div>
                <div className="">
                  <strong>{score?.score}</strong>/100
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="font-bold text-gray-800 text-lg">
              📁 Previously Scanned Resume
            </div>
            <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-4 mt-2">
              {resume &&
                resume?.map((item, index) => (
                  <Link
                    key={index}
                    className="flex flex-col rounded-md bg-white shadow-md p-2 border-1 border-gray-200 cursor-pointer"
                    to={`${item.id}`}
                  >
                    <div className="flex justify-between items-center">
                      <div>{item.name}</div>
                      <div className="text-lg text-indigo-600">
                        {item.score}/100
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ats;
