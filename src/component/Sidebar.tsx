import { AiFillContainer } from "react-icons/ai";
import { Link } from "react-router-dom";

import { IoReorderThree } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { GrScorecard } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";

export const SideBar = ({
  showSideBar,
  setSideBar,
}: {
  showSideBar: boolean;
  setSideBar: (val: boolean) => void;
}) => {
  return (
    <div
      className={`flex flex-col w-20 md:w-72 z-50 bg-indigo-600  min-h-screen p-4 space-y-5 text-white transition-all duration-300 ${
        showSideBar ? "w-72" : "w-20"
      } ${showSideBar ? "fixed " : "fixed"} md:static `}
    >
      <div
        className={`flex justify-between items-center text-3xl rounded py-2 `}
      >
        <div className="flex items-center">
          <div className={` md:block ${showSideBar ? "block" : "hidden"}`}>
            <AiFillContainer size={40} />
          </div>
          <div
            className={`md:block font-bold text-white text-2xl ${
              showSideBar ? "block" : "hidden"
            }`}
          >
            Defuse
          </div>
        </div>
        <button
          className={`cursor-pointer md:hidden block`}
          onClick={() => {
            setSideBar(!showSideBar);
          }}
        >
          <IoReorderThree size={40} />
        </button>
      </div>
      <Link
        className="flex text-xl space-x-2 items-center rounded py-2 pl-2 cursor-pointer hover:bg-indigo-700"
        to={"/dashboard"}
      >
        <div className="mb-1">
          <IoMdHome size={40} />
        </div>
        <div className={`md:block ${showSideBar ? "block" : "hidden"}`}>
          Home
        </div>
      </Link>
      <Link
        className="flex text-xl space-x-2 items-center rounded py-2 pl-3 cursor-pointer hover:bg-indigo-700"
        to={"/Ats"}
      >
        <div>
          <GrScorecard size={35} />
        </div>
        <div className={`md:block ${showSideBar ? "block" : "hidden"}`}>
          ATS
        </div>
      </Link>
      <Link
        className="flex text-xl space-x-2 items-center rounded py-2 pl-2 cursor-pointer hover:bg-indigo-700"
        to={"/sendEmail"}
      >
        <div>
          <MdEmail size={40} />
        </div>
        <div className={`md:block ${showSideBar ? "block" : "hidden"}`}>
          Send Email
        </div>
      </Link>
      <Link
        className="flex text-xl space-x-2 items-center rounded py-2 pl-2 cursor-pointer hover:bg-indigo-700"
        to={"/blog"}
      >
        <div>
          <FaBookOpen size={40} />
        </div>
        <div className={` md:block ${showSideBar ? "block" : "hidden"}`}>
          Blogs
        </div>
      </Link>
    </div>
  );
};
