import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import useAuth from '../../../../api2/useAuth';
import {  addAdminFeedback } from '../../../../api/feedback';
import Swal from 'sweetalert2';

const Feedback = ({status,_id}) => {
    const {user} = useAuth()
     let [isOpen, setIsOpen] = useState(false)
     const [loading,setLoading] = useState(false)
 
 const handleFeedback = event=>{
    event.preventDefault()
    setLoading(true)
    const form = event.target;
    const email = form.email.value;
    const feedback = form.feedback.value;
    const saveFeedback ={
        email,feedback,adminName:user?.displayName,photo:user?.displayURL,status: status, classId: _id
    }
    addAdminFeedback(saveFeedback)
    .then(data=>{
        console.log(data)
        setLoading(false)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `send feedback successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
    })
    .catch(error=>{
        console.log(error)
    })

 }  
    

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    return (
        <>
      <div >
        <button
          type="button"
          onClick={openModal}
          className="btn btn-primary btn-wide"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
             
             <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Admin Feedback For Deny The class
                  </Dialog.Title>
                  <div className="mt-2">
                    
           <form onSubmit={handleFeedback}>
           <div className="form-control">
          <label className="label">
            <span className="label-text">Admin Email</span>
          </label>
          <input type="email" name='email' readOnly defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
                    <div className="form-control">
          <label className="label">
            <span className="label-text">Feedback Reason ('Approved/Denied')</span>
          </label>
          <textarea type="text" name='feedback' placeholder="write the approved/denied reason" className="input input-bordered p-4"  required/>
        </div>
        <div className="mt-4 flex gap-6">
                    <input type="submit" className='btn btn-small btn-success' value='Send Instructor' />
                    <button className='btn btn-small btn-secondary'
                      onClick={closeModal}
                    >
                      Close Modal
                    </button>
           
                  </div>
           </form>
                   
                  </div>

                 
                </Dialog.Panel>
              </Transition.Child>
            
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    );
};

export default Feedback;