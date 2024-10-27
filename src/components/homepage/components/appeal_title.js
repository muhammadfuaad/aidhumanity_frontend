import { useNavigate } from "react-router-dom";

function Appeal_title({img, label}) {
  const navigate= useNavigate()

  return (
    <a
      onClick={()=>(navigate('/appeals', { state: {name: label}}))}
      className="rounded-2xl bg-transparent py-6 px-10">
      <div className="flex gap-4 items-center">
        <img src={img}></img>
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black whitespace-nowrap">{label}</p>
      </div>
    </a>
  );
}
export default Appeal_title;