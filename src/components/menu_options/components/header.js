import cross from "../../icons/cross-circle.svg"

function Header({title, setShowForm}) {
  return (
    <div className="flex justify-between p-14 border-bottom-medium">
      <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">{title}</p>
      <img src={cross} onClick={()=> setShowForm(prevState=> !prevState)}></img>
    </div>
  )
}
export default Header;