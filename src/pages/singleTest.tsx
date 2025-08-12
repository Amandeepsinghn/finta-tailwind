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
    const data = async () => {
      const response = await axios.get(`${baseUrl}/item/${atsId}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
    };
  });

  return <div>hello</div>;
};
