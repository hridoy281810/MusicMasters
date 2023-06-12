import React from 'react';
import Loader from '../../../../components/Loader';
import useAxiosSecure from '../../../../api2/useAxiosSecure';
import { useQuery } from 'react-query';
import SectionTitle from '../../../../components/Dashboard/SectionTitle';
import useTitle from '../../../../api2/useTitile';
import ManageClassesCard from './ManageClassesCard';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    useTitle("Music Masters | Manage Classes")
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
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
            <div className='grid grid-cols-1 md:grid-cols-2   xl:gap-20 mb-8 p-10 border-2 border-dashed border-success'>
                {
                    classes.map(cls => <ManageClassesCard key={cls._id} cls={cls} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default ManageClasses;