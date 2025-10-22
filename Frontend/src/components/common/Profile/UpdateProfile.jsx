import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profilePopup } from '../../../Redux&Toolkit/Slice/menuSlice';
import toast, { Toaster } from 'react-hot-toast';
import { fetchUser } from '../../../Redux&Toolkit/Slice/authSlice';
import API from '../../../utils/Api';
import { useForm, Controller } from 'react-hook-form';

function UpdateProfile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(user.avatar?.url || null);

  const { register, handleSubmit, control, formState, watch, setValue } = useForm({
    defaultValues: {
      firstname: user?.fullname?.firstname || '',
      lastname: user?.fullname?.lastname || '',
      dob: user?.dob || '',
      mobile: user?.mobile || '',
      avatar: null,
    },
    mode: 'onChange',
  });

  const { isDirty, isSubmitting } = formState;
  const avatarFile = watch('avatar');

  useEffect(() => {
    if (avatarFile && avatarFile.length > 0) {
      setPreview(URL.createObjectURL(avatarFile[0]));
    }
  }, [avatarFile]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    const fullname = { firstname: data.firstname, lastname: data.lastname };
    formData.append('fullname', JSON.stringify(fullname));
    formData.append('dob', data.dob);
    formData.append('mobile', data.mobile);
    if (data.avatar && data.avatar.length > 0) {
      formData.append('avatar', data.avatar[0]);
    }

    try {
      const response = await API.put('/api/user/update-profile', formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status === 200) {
        toast.success('Profile updated');
        dispatch(fetchUser());
        dispatch(profilePopup(false));
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const clearAvatar = () => {
    setPreview(null);
    setValue('avatar', null);
  };

  return (
    <div className="h-fit w-[60vw] bg-white rounded-md p-4">
      <div className="flex justify-between">
        <h2>Update Profile</h2>
        <p
          onClick={() => dispatch(profilePopup(false))}
          className="text-rose-400 font-bold text-xl cursor-pointer"
        >
          X
        </p>
      </div>

      <div className="my-4">
        <div className="bg-gray-200 h-32 w-40 rounded-md overflow-hidden mb-2">
          {preview && <img src={preview} alt="avatar" className="w-full h-full object-cover" />}
        </div>
        <Controller
          name="avatar"
          control={control}
          render={({ field }) => (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => field.onChange(e.target.files)}
              className="p-2"
            />
          )}
        />
        {preview && (
          <span onClick={clearAvatar} className="text-red-400 cursor-pointer">
            Clear
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              placeholder="First Name"
              {...register('firstname')}
              className="p-2 outline-0 ring-1 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              type="text"
              placeholder="Last Name"
              {...register('lastname')}
              className="p-2 outline-0 ring-1 rounded-md w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            type="date"
            {...register('dob')}
            className="p-2 outline-0 ring-1 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="mobile">Mobile No.</label>
          <input
            id="mobile"
            type="number"
            placeholder="Mobile No"
            {...register('mobile')}
            className="p-2 outline-0 ring-1 rounded-md"
          />
        </div>

        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={!isDirty || isSubmitting}
            className={`pt-1 px-3 rounded-md text-white ${
              !isDirty || isSubmitting ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-400'
            }`}
          >
            {isSubmitting ? 'Updating...' : 'Update'}
          </button>
        </div>
      </form>

      <Toaster />
    </div>
  );
}

export default UpdateProfile;
