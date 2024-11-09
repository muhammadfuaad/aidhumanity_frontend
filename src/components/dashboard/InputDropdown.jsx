import React from 'react'

const InputDropdown = ({title, dropdownItems, name, value, handleChange, required = true}) => {
  return (
    <div className="relative">
      <select name={name} value={value} onChange={handleChange} className="focus:outline-none focus:bg-transparent block 
        border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]">
          <option value="" disabled selected hidden>
            {`Select ${title}`}
          </option>
          {dropdownItems.map((item)=> {
            return (<option value={item}>{item}</option>)
          })}
      </select>
      <label for="title" className={`${required===true && "required"} absolute text-[1.1rem] font-semibold tracking-[0px] 
        text-gray top-2 left-4`}>{title}</label>
    </div>
  )
}

export default InputDropdown