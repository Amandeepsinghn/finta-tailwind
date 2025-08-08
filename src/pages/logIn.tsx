import axios, { AxiosError } from "axios";
import React, { useReducer, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";

const baseUrl = import.meta.env.VITE_ENDPOINT;

export default function LogIn() {
  const [password, showPassword] = useState<boolean>(false);

  const navigator = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const [showError, setError] = useState<boolean>(false);

  return (
    <div className="bg-gray-50 h-screen">
      <div className="flex justify-center items-center h-screen flex-wrap">
        <div className="border border-gray-200  p-2 md:p-10 md:py-8 space-y-4  shadow-md rounded-lg text- w-auto  bg-white md:w-130">
          <div className="text-center font-bold">Log In</div>
          <div className="space-y-1">
            <div className="text-gray-600 text-md">Email Address</div>
            <input
              className="border-1 p-2 rounded-md border-black pl-4 w-full"
              placeholder="babaYaga@yopmail.com"
              ref={emailRef}
            />
          </div>
          <div className="space-y-1">
            <div className="text-gray-600 text-md">Password</div>
            <div className="flex justify-between items-center border-1 p-2 rounded-md border-black pl-4 w-full">
              <input className="outline-0" type={`${password ? "password" : "text"}`} placeholder="••••••••" ref={passwordRef} />
              <button
                className="text-indigo-600 hover:text-indigo-700 cursor-pointer"
                onClick={async () => {
                  showPassword((prev) => !prev);
                }}
              >
                Show
              </button>
            </div>
          </div>
          <button
            className="px-2 py-2 text-white bg-indigo-600 w-full rounded-md hover:bg-indigo-700 block text-center cursor-pointer"
            onClick={async () => {
              try {
                setLoading(true);
                const response = await axios.post(`${baseUrl}/api/login`, {
                  email: emailRef.current?.value,
                  password: passwordRef.current?.value,
                });
                localStorage.setItem("token", response.data.body);
                navigator("/dashboard");
              } catch (error: unknown) {
                const err = error as AxiosError;
                setError(true);
              } finally {
                setLoading(false);
              }
            }}
          >
            {loading ? (
              <div className="flex justify-center">
                <AiOutlineLoading className="animate-spin" />{" "}
              </div>
            ) : (
              "LogIn"
            )}
          </button>
          {showError && <div className="text-red-500 text-center">User does not exsist</div>}
          <div className="flex justify-center pt-4 space-x-1.5">
            <div className=" text-gray-600 text-sm">Don't have an account ?</div>
            <Link className="text-sm text-indigo-600" to={"/signup"}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
