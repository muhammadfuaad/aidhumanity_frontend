import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Input_2 from './Input_2';
import InputDropdown from './InputDropdown';

const AppealForm = () => {
  const [campaigns, setCampaigns] = useState([])
  useEffect(() => {
    axiosInstance
      .get("/appeals/campaigns")
      .then((response) => {
        console.log("response:", response);
        setCampaigns(response.data.campaigns);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    targeted_amount: '',
    image: '',
    start_date: '',
    end_date: '',
    category: '', 
    campaign: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('file:', file);
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('formData:', formData);

    try {
      const response = await axiosInstance.post('http://localhost:8000/api/appeals/create_appeal', {
        ...formData,
        targeted_amount: Number(formData.targeted_amount),
      });

      console.log('Appeal created successfully:', response.data);
    } catch (error) {
      console.error('Error creating appeal:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Create Appeal</h2>
      <form onSubmit={handleSubmit}>

        <div className="p-8 sm:p-12 flex flex-wrap gap-4 justify-between border-bottom-medium">
          <div className='w-full'>
            <Input_2 title="Appeal Title" name="title" value={formData.title} handleChange={handleChange} />
          </div>
          <div className='w-[49%]'>
            <div className="relative">
              <input type="file" name="image" onChange={handleFileChange} 
                className="focus:outline-none focus:bg-transparent block border-light rounded-xl 
                px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
              <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Image</label>
            </div>
          </div>
          <div className='w-[49%]'>
            <Input_2 title="Targeted Amount" name="targeted_amount" value={formData.targeted_amount} handleChange={handleChange} />
          </div>
          <div className='w-[49%]'>
            <Input_2 title="Start Date" type="date" name="start_date" value={formData.start_date} handleChange={handleChange} />
          </div>
          <div className='w-[49%]'>
            <Input_2 title="End Date" type="date" name="end_date" value={formData.end_date} handleChange={handleChange} />
          </div>
          <div className='w-[49%]'>
            <InputDropdown title="Category" dropdownItems = {["Sadaqah", "Zakat"]} name="category" value={formData.category} 
              handleChange={handleChange} />
          </div>
          <div className='w-[49%]'>
            <InputDropdown title="Campaign" dropdownItems = {campaigns} name="campaign" value={formData.campaign} 
              handleChange={handleChange} />
          </div>
              
          <div className="relative w-full">
            <textarea type="text" name="description" value={formData.description} onChange={handleChange} 
              className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full 
                text-[1.3rem] font-medium text-black tracking-[0px]" rows="4" placeholder=" ">
            </textarea>
            <label for="title" className="required absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">
              Description
            </label>
          </div>

          <button onClick={handleSubmit} 
            className="px-12 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
            Register Appeal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppealForm;
