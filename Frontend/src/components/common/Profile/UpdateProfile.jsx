import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profilePopup } from '../../../Redux&Toolkit/Slice/menuSlice';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { fetchUser } from '../../../Redux&Toolkit/Slice/authSlice';

function UpdateProfile() {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState(user?.fullname?.firstname || "");
  const [lastName, setLastName] = useState(user?.fullname?.lastname || "");
  const [dob, setDob] = useState(user?.fullname?.dob || "");
  const [avatar, setAvatar] = useState(user?.avatar)
  const [preview, setPreview] = useState();
  
  const handleUpdates = async () => {
    const formData = new FormData();
    const fullname = {
      firstname: firstName,
      lastname: lastName
    }
    formData.append("fullname", JSON.stringify(fullname))
    formData.append("dob", dob)
    formData.append("avatar", avatar)
   
    const response = await axios.put("/api/user/update-profile", formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    })
    if (response.status === 200) {
      toast.success("Profile updated")
      dispatch(fetchUser())
      dispatch(profilePopup(false))
    } else {
      toast.error("Something went wrong")
    }

  }
  const handleFile = (e) => {
    setAvatar(e.target.files[0])
    setPreview(URL.createObjectURL(e.target.files[0]))
  } 
  return (
    <div className='h-fit w-[60vw] bg-white rounded-md p-4'>
      <div className='flex justify-between'>
        <h2>Update Profile</h2>
        <p onClick={() => dispatch(profilePopup(false))} className='text-rose-400 font-bold text-xl  cursor-pointer'>X</p>
      </div>
      <div>
        <div className='bg-gray-200 h-30 max-w-40'>
          <img className='object-contain w-full h-full rounded-md bg-cover' src={preview} alt="" />
        </div>
        <input
          onChange={(e) => handleFile(e)}
          className='p-2'
          accept='image/*'
          type="file" />
        {preview && <span onClick={() => setPreview(null)} className='text-red-400 cursor-pointer'>clear</span>}
      </div>
      <Toaster />
      <div className='flex justify-between w-full gap-4'>
        <div className='flex flex-col gap-1 mb-2 w-full'>
          <label htmlFor="">First name</label>
          <input className='p-2 outline-0 ring-1 rounded-md' type="text" placeholder='First name'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName} />
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <label htmlFor="">Last name</label>
          <input className='p-2 outline-0 ring-1 rounded-md' type="text" placeholder='First name'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName} />
        </div>
      </div>
      <div className='flex flex-col gap-1 w-full mb-2'>
        <label htmlFor="">Date of birth</label>
        <input className='p-2 outline-0 ring-1 rounded-md' type="date" placeholder='Dob'
          onChange={(e) => setDob(e.target.value)}
          value={dob} />
      </div>
      <div className='flex flex-col gap-1 w-full mb-2'>
        <label htmlFor="">Date of birth</label>
        <input className='p-2 outline-0 ring-1 rounded-md' type="date" placeholder='Dob'
          onChange={(e) => setDob(e.target.value)}
          value={dob} />
      </div>
      <div className='float-end my-2'>
        <button onClick={handleUpdates} className='pt-1 px-3 bg-red-400 text-white rounded-md'>Update</button>
      </div>
    </div>
  )
}

export default UpdateProfile