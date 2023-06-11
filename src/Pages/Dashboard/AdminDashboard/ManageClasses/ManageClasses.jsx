import React from 'react';
import Loader from '../../../../components/Loader';
import ManageClassesCard from './ManageClassesCard';
import useAxiosSecure from '../../../../api2/useAxiosSecure';
import { useQuery } from 'react-query';
import SectionTitle from '../../../../components/Dashboard/SectionTitle';

const ManageClasses = () => {
  

    const [axiosSecure] = useAxiosSecure()
  
    const {data: classes = [],refetch} = useQuery(['classes'],async()=>{
        const res = await axiosSecure.get(`/classes/role`)
        console.log(res.data)
        return res.data
    }) 
    if (classes.length === 0) {
        return <Loader />;
    }
    return (
        <div>
            <SectionTitle heading={"Admin Manage Classes"} />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2  lg:gap-14 xl:gap-20 mb-8'>
                {
                    classes.map(cls => <ManageClassesCard key={cls._id}   cls={cls} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default ManageClasses;