import React, { useCallback, useRef, useState } from "react";
import { SideBar } from "../component/Sidebar";
import { GoPeople } from "react-icons/go";

import { useDropzone } from "react-dropzone";
import { FadeLoader } from "react-spinners";
import { HiX } from "react-icons/hi";
import type { AxiosError } from "axios";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_ENDPOINT;
import axios from "axios";

const Sendemail = () => {
  const [showSideBar, setSideBar] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);

  const [senderEmail, setSenderEmail] = useState<string>("");
  const [appPassword, setAppPassword] = useState<string>("");

  const [resume, setResume] = useState<string>("");

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [message, setMessage] = useState<string>("");

  const [email, setEmail] = useState<string[]>([]);

  const emailRef = useRef<HTMLInputElement>(null);

  const [subject, setSubject] = useState<string>("");

  const [resumeName, setResumeName] = useState<string>();

  const formData = new FormData();

  const onDrop = useCallback(async (files: File[]) => {
    if (files[0].type === "application/pdf") {
      formData.append("file", files[0]);

      setResumeName(files[0].name);

      try {
        setLoading(true);
        const resumeUrl = await axios.post(
          `${baseUrl}/api/uploadResume`,
          formData,
          {
            headers: {
              Authorization: localStorage.getItem("token") || "",
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setResume(resumeUrl.data.body);
        setLoading(false);
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeElement = (idToRemove: number) => {
    const updatedItems = email.filter((email, index) => index != idToRemove);
    setEmail(updatedItems);
  };

  return (
    <div className="flex min-h-screen">
      <SideBar showSideBar={showSideBar} setSideBar={setSideBar} />
      {loading && (
        <div className="flex justify-center items-center w-screen h-screen ">
          <FadeLoader height={15} radius={5} width={3} color="#3c69e9" />
        </div>
      )}

      {loading == false && (
        <div
          className={`flex-1 bg-gray-50  ${
            showSideBar ? "min-h-full" : "ml-20 min-h-screen md:ml-0 "
          }`}
        >
          <div className="p-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-700 to-purple-500 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-3 pb-2">
              <h1 className="font-semibold text-2xl">Compose Email</h1>
              <p className="max-w-sm mx-auto text-gray-700 text-center pt-2">
                Send professional email with ease
              </p>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 text-gray-800 bg-white shadow-md rounded-lg">
              <div className="flex flex-col p-3 space-y-2">
                <div className="flex justify-start items-center space-x-2">
                  <GoPeople />
                  <div>Sender</div>
                </div>
                <div className="flex flex-col  sm:flex-row justify-start space-x-1.5  space-y-1.5">
                  <input
                    className=" md:p-2 md:flex-grow md:w-full md:max-w-full max-w-50 border border-gray-200 bg-gray-100 rounded-md outline-0 pl-2"
                    placeholder="Add sender email address"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                  />
                  <input
                    className=" md:p-2 md:flex-grow md:w-full md:max-w-full max-w-50 border border-gray-200 bg-gray-100 rounded-md outline-0 pl-2"
                    placeholder="Add password"
                    value={appPassword}
                    onChange={(e) => setAppPassword(e.target.value)}
                  />
                </div>
                <div className="flex space-x-2.5 flex-col sm:flex-row space-y-1.5">
                  <p className="text-red-400 text-xs">
                    Note :app password is required. please click on the given
                    link
                  </p>
                  <a
                    href="https://myaccount.google.com/apppasswords"
                    className="text-xs"
                  >
                    https://myaccount.google.com/apppasswords
                  </a>
                </div>
                {/* add recipents */}
                <div className="flex justify-start items-center space-x-2">
                  <GoPeople />
                  <div>Recipents</div>
                </div>
                <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2  text-white gap-1">
                  {email.map((email, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br bg-indigo-600 rounded-md shadow-sm text-center flex justify-between p-1"
                    >
                      <div>{email}</div>
                      <button
                        className=" cursor-pointer"
                        onClick={async () => {
                          removeElement(index);
                        }}
                      >
                        <HiX size={20} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex  flex-col justify-between text-gray-600 w-full gap-2 sm:flex-row">
                  <input
                    className=" md:p-2 md:flex-grow md:w-full md:max-w-full max-w-50 border border-gray-200 bg-gray-100 rounded-md outline-0 pl-2"
                    placeholder="Add email address"
                    ref={emailRef}
                  />
                  <button
                    className=" px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md cursor-pointer"
                    onClick={async () => {
                      const newEmail = emailRef.current?.value;
                      if (newEmail) {
                        setEmail((prev) => [...prev, newEmail]);
                      }
                    }}
                  >
                    +Add
                  </button>
                </div>
                <div className="flex flex-col space-y-1 ">
                  <div className="text-gray-800">Subject *</div>
                  <input
                    className="md:p-2 border border-gray-200 text-gray-600 bg-gray-100 rounded-md outline-0 pl-2 "
                    placeholder="Application  for position title"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1 ">
                  <div className="text-gray-800">Message *</div>
                  <textarea
                    placeholder="Dear Hiring Manager,&#10;&#10;I am writing to express my interest in the [Position Title] role at [Company Name]...&#10;&#10;Best regards,&#10;[Your Name]"
                    rows={12}
                    className="w-full bg-gray-50 rounded-md p-1 shadow-sm border border-gray-100 outline-0"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1 ">
                  <div className="text-gray-800">Attachements</div>
                  <div
                    className="border-2 border-dotted rounded h-20  border-gray-200 bg-gray-100"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <div className="text-gray-600 max-w-[220px] text-center mx-auto h-full items-center pt-2">
                      Drop your resume here or click to browse
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="p-1 pb-4 rounded-xl border  border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50 ">
                    <div className="font-bold pb-2">AI Writing Assistant</div>
                    <div className="grid grid-cols-1 grid-rows-2  shadow-sm rounded-md gap-2">
                      <div
                        className="bg-white flex rounded-md text-gray-800 flex-col justify-start p-1 cursor-pointer hover:bg-indigo-400 "
                        onClick={async () => {
                          setLoading(true);
                          const formalTone = await axios.post(
                            `${baseUrl}/api/formalTone`,
                            { data: textAreaRef.current?.value },
                            {
                              headers: {
                                Authorization: localStorage.getItem("token"),
                              },
                            }
                          );
                          setMessage(formalTone.data.body);

                          setLoading(false);
                        }}
                      >
                        <div className="text-md">
                          <div>Professional Tone</div>
                          <div className="text-gray-600 text-sm">
                            Make it more Formal
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-white flex rounded-md text-gray-800 flex-col justify-start p-1 cursor-pointer hover:bg-indigo-400 "
                        onClick={async () => {
                          if (resume == "") {
                            return alert("please upload the resume first");
                          }

                          setLoading(true);
                          const resumeTone = await axios.post(
                            `${baseUrl}/api/pdfbody`,
                            {
                              data: resume,
                            },
                            {
                              headers: {
                                Authorization: localStorage.getItem("token"),
                              },
                            }
                          );

                          setMessage(resumeTone.data.body);
                          setLoading(false);
                        }}
                      >
                        <div className="text-md">
                          <div>Resume Tone</div>
                          <div className="text-gray-600 text-sm">
                            Automatically write message based on pdf
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Send Now Button */}
                <div className="flex justify-center ">
                  <button
                    className="bg-indigo-600 w-full hover:bg-indigo-700 shadow-md text-xl text-white rounded p-2 cursor-pointer"
                    onClick={async () => {
                      try {
                        await axios.post(
                          `${baseUrl}/api/sendEmail`,
                          {
                            email: senderEmail,
                            password: appPassword,
                            emailSender: email,
                            subject: subject,
                            text: message,
                            filename: resumeName,
                            resumeUrl: resume,
                            appPassword: appPassword,
                          },
                          {
                            headers: {
                              Authorization: localStorage.getItem("token"),
                            },
                          }
                        );
                      } catch (error: unknown) {
                        const err = error as AxiosError;

                        if (err.response && err.response.status == 400) {
                          alert("please write all the credentials correct");
                        } else {
                          alert("something went wrong");
                        }
                      }
                    }}
                  >
                    Send Now
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 text-gray-800 bg-white shadow-md rounded-lg mt-3">
              <div className="flex flex-col p-3 space-y-2">
                <div className="text-sm font-bold">
                  💡Tips for Multiple Recipients & Scheduling
                </div>
                <div className="text-sm">
                  <div className="flex space-x-0.5 items-center">
                    <VscActivateBreakpoints color="green" />
                    <p>Multiple Recipients</p>
                  </div>
                  <p className="text-sm/4 text-gray-600 pl-3">
                    Add multiple companies/recuiters to send the same email
                    efficiently
                  </p>
                </div>
                <div className="text-sm">
                  <div className="flex space-x-0.5 items-center">
                    <VscActivateBreakpoints color="orange" />
                    <p>Smart Scheduling</p>
                  </div>
                  <p className="text-sm/4 text-gray-600 pl-3">
                    Schedule emails for business hours (9 AM - 5 PM) for better
                    response rates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sendemail;
