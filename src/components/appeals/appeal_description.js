import {ReactComponent as User_circle} from "../../icons/user-circle.svg";

function Appeal_description({appeal}) {
  const {campaign, category, total_supporters, collected_amount, raised_amount, title, description, image} = appeal
  const authorName = appeal.author.name
  return (
    <div className="flex flex-col bg-white rounded-3xl">
      <div className="py-8 px-8">
        <p className="text-[1.2rem] font-medium tracking-[-0.3px] text-[#bdbdbd] mb-1">
          {campaign}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-[2.6rem] font-bold tracking-[-0.65px] text-black leading-[3rem] sm:text-[3.6rem] sm:tracking-[-0.54px] sm:leading-[4rem] mb-12 sm:mb-4">
            {title}
          </p>
          <div className="bg-amber rounded-full w-10 h-10 hidden sm:flex justify-center items-center">
            <p className="text-[1.2rem] font-bold text-black">
              {category === "Zakat" ? "Z" : "S"}
            </p>
          </div>
        </div>
        <div className="sm:flex space-x-2 items-center hidden">
          <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-body">
            fundraised by
          </p>
          <User_circle stroke="#102558" />
          <p className="text-[1.1rem] font-semibold tracking-[-0.28px] text-primary-dark">
            {authorName ? authorName : "Admin"}
          </p>
        </div>
      </div>
      <div className="w-full">
        <img src={image} className="w-full h-96"></img>
      </div>
      <div className="p-8 border-bottom-light">
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black mb-8">
          Description
        </p>
        <p className="mb-8 sm:mb-0 text-[1.4rem]">{description}</p>
      </div>
    </div>
  );
}
export default Appeal_description;