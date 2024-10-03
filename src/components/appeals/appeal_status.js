import Circular_progress_bar from "../dashboard/circular_progress_bar";
import Circular_progress_bar_2 from "../dashboard/circular_progress_bar_2";
import { ReactComponent as User_circle } from "../../icons/user-circle.svg";



function Appeal_status({targeted_amount, collected_amount, total_supporters, end_date}) {
  return (
    <div className="flex flex-col bg-white rounded-3xl px-8 py-16">
      <div className="flex justify-between">
        <div className="flex flex-col space-y-2">
          <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">
            £{collected_amount}
          </p>
          <p className="text-[1.2rem] font-medium tracking-[-0.3px] text-spanish-gray">
            raised of{" "}
            <span className="font-semibold text-primary">
              £{targeted_amount}
            </span>{" "}
            target
          </p>
        </div>
        <div className="w-[25%]">
          <Circular_progress_bar_2
            percentage={(collected_amount / targeted_amount) * 100}
            fontSize="2"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-16">
        <div className="flex space-x-2 items-center">
          <span className="text-[1rem] font-medium tracking-[-0.15px] text-body">
            by
          </span>
          <User_circle stroke="#102558" />
          <span className="text-[1rem] font-medium tracking-[-0.15px] text-body">
            {total_supporters} supporters
          </span>
        </div>
        <div className="flex space-x-2 items-center">
          <img src="./icons/red-clock.svg"></img>
          <span className="text-[1rem] font-semibold tracking-[-0.15px] text-red">
            {`Ends in ${end_date ? end_date : "3 months"}`}
          </span>
        </div>
      </div>

      <button
        className="w-full py-6 uppercase text-[1.4rem] font-semibold text-black bg-green
        rounded-xl mt-4"
      >
        Donate
      </button>
      <button
        className="w-full py-6 uppercase text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline outline-spanish-gray
        rounded-xl flex justify-center space-x-4 mt-6"
      >
        <img src="./icons/share-icon.svg"></img>
        <span>Share</span>
      </button>
    </div>
  );
}
export default Appeal_status;