import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Take_off from '../take_off';
import Appeal_status from './appeal_status';
import Fixed_navigator from '../fixed_navigator';
import Appeal_description from "./appeal_description"
import Dashboard_header_mobile from '../dashboard/dashboard_header_mobile';
import Appeal_desktop_header from './appeal_desktop_header';
import Appeal_share from './appeal_share';
import React from 'react';
import { useParams } from 'react-router-dom';

function Appeal_view() {
  const params = useParams();
  const {_id} = params
  const appealId = _id
  // console.log('appealId:', appealId);
  // console.log("params:", params);
  const [appeal, setAppeal] = useState({});
  const [isEdit, setIsEdit] =useState(false)
  const [visibility, setVisibility] = React.useState(false);
  const [editedDescription, setEditedDescription] =useState("")
  const [editedTitle, setEditedTitle] = useState("")
  
  useEffect(()=>{
    axiosInstance.get(`/appeals/${appealId}`).then((response) => {
      console.log("response:", response);
      setAppeal(response.data.data);
    })
    .catch((error) => {
      console.log("error:", error);
    });
  }, [appealId])
  

  useEffect(() => {
    console.log('appeal:', appeal)
  }, [appeal])
  

  const handleSubmit = () => {
    console.log('editedTitle:', editedTitle);
    axiosInstance.put('http://localhost:8000/api/appeals/create_appeal', {editedDescription, editedTitle})
      .then((response)=> {
        console.log('response:', response);
      }).catch((error)=> {
        console.log('error:', error);
      })
  }
  
  return (
    <div className="flex flex-col bg-[#f5f6f7] min-h-screen pb-40">
      {visibility? <div className="fixed right-0 z-10"><Appeal_share /></div> : null}
      <div className='sm:hidden'>< Dashboard_header_mobile /></div>
      <div className='hidden sm:block'>< Appeal_desktop_header /></div>
      < Take_off />
      <div className="px-8 py-12 bg-white flex justify-center items-center">
        <button className="w-full sm:w-fit sm:px-20 py-6 uppercase text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline outline-spanish-gray
        rounded-xl" onClick={()=>setVisibility(current=> !current)}>Edit Your Page</button>
      </div>

      <div className='flex flex-col space-y-12 px-8 sm:space-y-0 mt-16 sm:flex-row sm:gap-10 sm:px-56'>
        <div className='sm:px-0 sm:w-[30%] sm:order-2'>
          < Appeal_status targeted_amount={appeal.targeted_amount} collected_amount={appeal.collected_amount} total_supporters={appeal.total_supporters}/>
        </div>
        <div className='sm:px-0 sm:w-[70%] sm:order-1'>
          < Appeal_description appeal={appeal} isEdit={isEdit} editedTitle={editedTitle} editedDescription={editedDescription}
            setEditedTitle={setEditedTitle} setEditedDescription={setEditedDescription}/>
        </div>
      </div>
      < Fixed_navigator campaign={appeal.campaign} isEdit={isEdit} setIsEdit={setIsEdit} handleSubmit={handleSubmit} />
    </div>
  )
}
export default Appeal_view;