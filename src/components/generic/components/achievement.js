import check from "../../icons/green-check-circle.svg"
import user from "../../icons/user-circle-black.svg";
function Achievement({title, collected_amount, total_supporters}) {
  return (
    <div className="bg-white w-full p-12 rounded-3xl">
      <div className="flex gap-4 mb-2">
        <img src={check}></img>
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">{title}</p>
      </div>
      <p className="flex gap-3 text-[1.1rem] font-semibold tracking-[-0.17px] text-primary mb-1"><span className="mt-3">Raised:</span> <span className="text-[2.4rem]"> £{collected_amount}</span></p>
      <p className="flex items-center text-[1.1rem] font-medium tracking-[-0.17px] text-body">Fulfilled by<img src={user} className="mx-2"></img> <span className="font-semibold">{total_supporters} supporters</span></p>
    </div>
  );
}
export default Achievement;