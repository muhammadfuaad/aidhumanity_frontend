import React from 'react'
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import Appeal_card from '../../generic/components/appeal_card';
import { Dropdown } from 'primereact/dropdown';

const AppealsPage = () => {
  const [appeals, setAppeals] = useState([]);
  const [appealsType, setAppealsType] = useState("All Appeals")
  const [campaigns, setCampaigns] = useState([])
  const [loadData, setLoadData] = useState(false)

  useEffect(() => {
    axiosInstance
      .get("/appeals")
      .then((response) => {
        console.log("response:", response);
        setAppeals(response.data.data);
        // setCampaigns([new Set(response.data.data.map((item)=> item.campaign))])
        setCampaigns([...new Set(response.data.data.map((item) => item.campaign))]);

      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, [loadData]);

  useEffect(()=>{
    console.log('campaigns:', campaigns);
    console.log('loadData:', loadData);
  }, [campaigns, loadData])

  return (
    <div className=" p-32">
      {/* <p className="text-[3.2rem] text-black font-semibold mb-8">All Appeals</p> */}
      <Dropdown value={appealsType} onChange={(e) => setAppealsType(e.value)} options={campaigns}  optionLabel="name" 
        placeholder="All Appeals" className="w-fit md:w-14rem text-[2.6rem] text-black font-semibold p-6 border 
        border-[#e6e6e6] rounded-lg" 
        panelClassName="custom-dropdown-panel"
      />
      <div className="flex gap-4 justify-between flex-wrap">
        {appeals.map((appeal) => (
          appeal.campaign === appealsType || appealsType === "All Appeals" ? (
            <div className="w-[32%] h-1/2" key={appeal._id}>
              <Appeal_card appeal={appeal} setLoadData={setLoadData} />
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
}

export default AppealsPage