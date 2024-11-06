import React from 'react'

const Input_2 = ({title, type="text", name, value, handleChange, required=true}) => {
  return (
    <div className="relative">
      <input type={type} name={name} value={value} className="focus:outline-none focus:bg-transparent block 
        border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" "
        onChange={handleChange} />
      <label for="title" className={`${required===true && "required"} absolute text-[1.1rem] font-semibold tracking-[0px] 
        text-gray top-2 left-4`}>{title}</label>
    </div>
  )
}

export default Input_2