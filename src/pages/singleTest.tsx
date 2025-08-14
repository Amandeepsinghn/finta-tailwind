import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_ENDPOINT;

interface data {
  id: string;
  name: string;
  score: number;
  good: string[];
  bad: string[];
  area_improvement: string[];
  userId: string;
  resumeUrl: string;
}

export const AppTest = () => {
  const { atsId } = useParams();

  const [data, setData] = useState<data>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/api/item/${atsId}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setData(response.data.body);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#f5f7fa] h-screen">
      <div className="md:flex md:flex-row md:justify-around h-screen flex flex-col ">
        <div className="flex-1  p-2">
          <div className="font-bold text-2xl">Resume Preview</div>
        </div>
        <div className="flex-1  p-2 space-y-6">
          <div className="flex justify-between shadow-md bg-white p-3 rounded font-semibold">
            <div>Score</div>
            <div className="text-blue-600">{data?.score}</div>
          </div>
          <div className="flex flex-col shadow-md p-3 rounded bg-green-50">
            <div className="text-green-600 font-semibold">Good points</div>
            <ul className="list-disc pl-3 space-y-1.5">
              {data?.bad?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col shadow-md p-3 rounded bg-[#fff4e1]">
            <div className="text-[#f5a623] font-semibold">
              Area of improvement
            </div>
            <ul className="list-disc pl-3 space-y-1.5">
              {data?.area_improvement?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col shadow-md p-3 rounded bg-[#fde8e8]">
            <div className="text-[#f44336] font-semibold">Bad Points</div>
            <ul className="list-disc pl-3 space-y-1.5">
              {data?.bad?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
