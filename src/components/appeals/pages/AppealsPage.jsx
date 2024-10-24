import React from 'react'
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import Appeal_card from '../../generic/components/appeal_card';

const AppealsPage = () => {
  const [appeals, setAppeals] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/appeals")
      .then((response) => {
        console.log("response:", response);
        setAppeals(response.data.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  return (
    <div className=" p-32">
      <p className="text-[3.2rem] text-black font-semibold mb-8">All Appeals</p>
      <div className="flex gap-4 justify-between flex-wrap">
        {appeals.map((appeal) => {
          return (
            <div className="w-[30%] h-1/2">
              <Appeal_card appeal={appeal} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppealsPage