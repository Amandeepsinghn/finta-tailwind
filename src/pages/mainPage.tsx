import { Link } from "react-router-dom";
import { Button } from "../component/button";
import { Dash } from "../component/Header";

export const Mainpage = () => {
  return (
    <div>
      <Dash />
      <div className="bg-gray-50 px-4 py-8">
        <div className="md:text-4xl text-3xl  text-center font-bold mb-3">
          Enhance Your Emails & Resume with AI
        </div>
        <div className="text-center max-w-xl mx-auto text-gray-600 px-6">
          Automatically draft personalized emails attach CVs, and get real-time
          ATS feedback to increase your job prospects.
        </div>
        <div className="flex justify-center mt-5 mb-10">
          <Link to="/login">
            <Button text="Get Started" size="l" color="bg-indigo-600" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 gap-6 p-2 md:grid-cols-2 max-w-5xl mx-auto mt-4">
        <div className="border rounded border-gray-600 p-3 shadow-sm">
          <div className="flex py-2 px-3 flex-col">
            <div className="font-bold">✉️ AI Email Drafting</div>
            <div className="text-gray-600 w-auto">
              Upload your cv and let AI write a tailored email body
            </div>
            <div className="space-y-2">
              <div className="border-1 p-2 text-gray-600 rounded-md">
                Recipient Email
              </div>
              <div className="border-1 p-2 text-gray-600 rounded-md">
                Subject
              </div>
            </div>
            <div className="py-2">Choose File no file chosen</div>
            <div className="bg-indigo-700 text-white p-2 w-30 rounded-md ">
              Draft with AI
            </div>
          </div>
        </div>
        <div className="border rounded border-gray-600 p-3 shadow-sm">
          <div className="flex py-2 px-3 flex-col">
            <div className="font-bold">📊 ATS Resume Check</div>
            <div className="text-gray-600 w-auto">
              Upload your resume to get a score and suggestions to improve it.
            </div>
            <div className="py-2">Choose File no file chosen</div>
            <div className="bg-indigo-700 text-white p-2 w-30 rounded-md mb-2">
              Check Score
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl text-gray-600">
              <div className="">
                ✅ Current ATS Score: 82/100
                <ul className="list-disc pl-10">
                  <li>Well-written experience summary</li>
                  <li>Include more role-specific keywords</li>
                  <li>Fix passive language in last role</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
