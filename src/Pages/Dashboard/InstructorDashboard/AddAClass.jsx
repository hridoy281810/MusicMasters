import React from 'react';
import useAuth from '../../../api2/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../api2/useAxiosSecure';
import { imageUpload } from '../../../api/imageUploadbyImgBB';
import SectionTitle from "../../../components/Dashboard/SectionTitle";
import Swal from 'sweetalert2';
import useTitle from '../../../api2/useTitile';

const AddAClass = () => {
  useTitle("Music Masters | Add Class")
  const { user } = useAuth()
  const [axiosSecure] = useAxiosSecure()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    const { class_image_url, ...classData } = data;
    imageUpload(class_image_url[0])
      .then((uploadedImage) => {
        const classDataWithImage = {
          ...classData,
          class_image_url: uploadedImage.data.url, instructor_image_url: user?.photoURL, status: 'pending', number_of_students: 0, total_enrolled_student: 0, role: 'instructor', adminFeedback: 'no feedback'
        };
        console.log(classDataWithImage);
        axiosSecure.post('/classes', classDataWithImage)
          .then(data => {
            if (data.data.insertedId) {
              reset()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item added successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })

      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <SectionTitle heading={" Instructor Add A Class"} />
      <div className='border border-dashed border-success rounded-lg p-10 m-10 shadow'>
        <form className='w-full' onSubmit={handleSubmit(onSubmit)} >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name*</span>
            </label>
            <input type="text" {...register("class_name", { required: true })} name="class_name" placeholder="class name" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input readOnly type="text" {...register("instructor_email", { required: true })} name='instructor_email' value={user?.email} className="input input-bordered   w-[400]" />
          </div>
          <div className='md:flex w-full gap-4'>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input readOnly type="text"  {...register("instructor_name", { required: true })} name='instructor_name' value={user?.displayName} className="input input-bordered  w-[400]" />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Instructor Photo</span>
              </label>
              <input readOnly defaultValue={user?.photoURL || 'https://i.ibb.co/JdM7pdM/IMG-2061.jpg'} type="text" {...register("instructor_image_url", { required: true })} name="instructor_image_url" placeholder="Instructor Photo" className="input input-bordered " />
            </div>
          </div>
          <div className='md:flex gap-4 w-full'>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select  {...register("status", { required: true })} name="status" className="select select-bordered  w-[266]">
                <option value="pending">pending</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input type="number" {...register("available_seats", { required: true, min: 1 })} name="available_seats" placeholder="available seats" className="input input-bordered w-[266]" />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="number" {...register("price", { required: true })} name="price" placeholder="price" className="input input-bordered w-[266]" />
            </div>

          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Class Photo</span>
            </label>
            <input type="file" {...register("class_image_url", { required: true })} name="class_image_url" placeholder="Class Photo" className="input input-bordered pt-2" />
          </div>
          <div className="form-control  mt-6">
            <input type='submit' className="btn btn-block btn-success" value={'Add Now'} />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAClass;