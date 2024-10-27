import React from "react";
import User from "../../icons/user-circle-black.svg";
import Circular_progress_bar_2 from "../../dashboard/circular_progress_bar_2";
import { useNavigate } from "react-router-dom";
import {truncateString} from "../../utils/commonMethods"
import axiosInstance from "../../utils/axiosInstance";
function Appeal_card({appeal}) {
  const userId = localStorage.getItem('userId')
  const {_id, title, description, targeted_amount, collected_amount, image, campaign, category, total_supporters, author} = appeal
  const [display, setDisplay] = React.useState(false);
  const navigate = useNavigate()

  const deleteAppeal = () => {
    axiosInstance
      .delete(`/appeals/delete/${_id}`).then((response) => {
        console.log("response:", response);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  return (
    <div className="w-full bg-white shadow-md rounded-3xl relative border border-blue-500">
      <div className="rounded-xl  bg-black bg-opacity-50 px-8 py-4 absolute top-4 right-4">
        <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-platinum">
          {campaign}
        </p>
      </div>
      <img src={image} className="max-h-80 w-full rounded-t-3xl"></img>
      <div className="px-8">
        <div className="py-12 border-b-2 border-platinum">
          <p className="text-[2.2rem] font-bold tracking-[-0.55px] text-black mb-8">
            {title}
          </p>
          <p className="text-[1.6rem] font-normal tracking-[-0.4px] leading-[2.4rem] h-[6rem] text-body">
            {truncateString(description, 100)}
          </p>

          <div className="flex gap-4 items-center mt-16">
            <div className="w-1/5">
              <Circular_progress_bar_2 percentage={collected_amount/targeted_amount * 100} fontSize="2" />
            </div>
            <div className="flex flex-col w-4/5 text-[1.1rem] font-semibold tracking-[-0.17px]">
              <div className="flex justify-between mb-1">
                <p className="text-primary">Raised: £{collected_amount}</p>
                <p className="text-green">Goal: £{targeted_amount}</p>
              </div>
              <div className="flex justify-between relative">
                {display ? (
                  <div className="rounded-3xl bg-white p-12 absolute -top-48 left-48 whitespace-nowrap">
                    <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body leading-[1.8rem]">
                      {`This appeal is ${category} applicable.`}
                    </p>
                  </div>
                ) : null}
                <div className="text-body flex gap-2 items-center">
                  <span className="font-medium">by</span>
                  <img src={User}></img>
                  <span> {total_supporters} supporters</span>
                </div>
                <div
                  className="bg-amber rounded-full w-9 h-9 flex justify-center items-center"
                  onClick={() => setDisplay((current) => !current)}
                >
                  <p className="text-[1rem] font-bold text-black">
                    {category === "Zakat" ? "Z" : "S"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-10">
          <p className="text-[1.2rem] font-semibold tracking-[-0.18px] text-primary-dark cursor-pointer"
            onClick={()=> navigate(`/appeal_view/${_id}`)}>
            Read More
          </p>
          {author === userId && 
            <p className="text-[1.2rem] font-semibold tracking-[-0.18px] text-primary-dark cursor-pointer"
              onClick={deleteAppeal}>
              Delete
            </p>
          }
          <button className="px-12 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default Appeal_card;