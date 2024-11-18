function Fixed_navigator({campaign="Water Hand Pumps", isEdit, setIsEdit, handleSubmit}) {
  return (
    <nav className="flex justify-between fixed w-full bottom-0 right-0 px-8 sm:pl-56 sm:pr-48 bg-white">
      <ul className="flex space-x-12 w-full bg-white text-[1.2rem] font-medium tracking-[-0.18px] text-black">
        <li className="py-8 border-y-4 border-white hover:border-b-primary" onClick={()=>setIsEdit(prev=> !prev)}>Edit</li>
        <li className="py-8 border-y-4 border-white hover:border-b-primary">Delete</li>
        {isEdit && <li className="py-8 border-y-4 border-white hover:border-b-primary" onClick={handleSubmit}>Save Changes</li>}
      </ul>

      <div className="hidden sm:flex space-x-4 items-center">
        <p className="text-[1.2rem] font-bold tracking-[-0.3px] text-black whitespace-nowrap">{campaign}</p>
        <img src="./icons/arrow-left.svg" className="w-4"></img>
      </div>
    </nav>
  )
}
export default Fixed_navigator;